#!/bin/bash

set -e
set -x

INPUT=$GITHUB_WORKSPACE/mozilla-release/obj-aarch64-apple-darwin21.4.0/dist/Impervious-*.en-US.mac.dmg
OUTPUT=$GITHUB_WORKSPACE/dist
APP_NAME=Impervious
PKG_NAME=Impervious
BUNDLE=$OUTPUT/$APP_NAME/$PKG_NAME.app
BROWSER_ENTITLEMENTS_FILE=$GITHUB_WORKSPACE/mozilla-release/security/mac/hardenedruntime/browser.production.entitlements.xml
PLUGINCONTAINER_ENTITLEMENTS_FILE=$GITHUB_WORKSPACE/mozilla-release/security/mac/hardenedruntime/plugin-container.production.entitlements.xml
MAC_CERT_NAME=S722DY52YY
APP_PATH=$BUNDLE
ZIP_PATH=$OUTPUT/$APP_NAME/$PKG_NAME.zip


echo "Processing $OUTPUT..."

rm -f -rf $OUTPUT
mkdir -p $OUTPUT/$APP_NAME

sudo mozilla-release/build/package/mac_osx/unpack-diskimage $INPUT /Volumes/$APP_NAME $OUTPUT/$APP_NAME

ls -la $OUTPUT

echo "***** SIGNING *****"

# security unlock-keychain -p impervious impervious
security find-identity -v

# Clear extended attributes which cause codesign to fail
xattr -cr "${BUNDLE}"

# Sign these binaries first. Signing of some binaries has an ordering
# requirement where other binaries must be signed first.
codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" \
  "${BUNDLE}/Contents/MacOS/XUL" \
  "${BUNDLE}/Contents/MacOS/pingsender" \
  "${BUNDLE}"/Contents/MacOS/*.dylib

codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" --deep \
  "${BUNDLE}"/Contents/MacOS/updater.app

# Sign the updater
codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" \
  --entitlements ${BROWSER_ENTITLEMENTS_FILE} \
  "${BUNDLE}"/Contents/Library/LaunchServices/org.mozilla.updater

# Sign main exectuable
codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" --deep \
  --entitlements ${BROWSER_ENTITLEMENTS_FILE} \
  "${BUNDLE}"/Contents/MacOS/$APP_NAME-bin \
  "${BUNDLE}"/Contents/MacOS/$APP_NAME

# Sign gmp-clearkey files
find "${BUNDLE}"/Contents/Resources/gmp-clearkey -type f -exec \
  codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" {} \;

# Sign the main bundle
codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" \
  --entitlements ${BROWSER_ENTITLEMENTS_FILE} "${BUNDLE}"

# Sign the plugin-container bundle with deep
codesign --force -o runtime --verbose --sign "$MAC_CERT_NAME" --deep \
  --entitlements ${PLUGINCONTAINER_ENTITLEMENTS_FILE} \
  "${BUNDLE}"/Contents/MacOS/plugin-container.app

# Validate
codesign -vvv --deep --strict "${BUNDLE}"

# Notarize the application
# https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution/customizing_the_notarization_workflow#3087734

# Create a ZIP archive suitable for notarization.
/usr/bin/ditto -c -k --keepParent "$APP_PATH" "$ZIP_PATH"

# As a convenience, open the export folder in Finder.
/usr/bin/open "$OUTPUT/$APP_NAME/"

xcrun notarytool submit $ZIP_PATH --apple-id "support@impervious.ai" --password $AC_PASSWORD --team-id "$MAC_CERT_NAME" --wait
