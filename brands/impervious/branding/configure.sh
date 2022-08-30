# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

MOZ_APP_VENDOR=Impervious
MOZ_APP_BASENAME=Impervious
MOZ_APP_DISPLAYNAME="Impervious"
MOZ_MACBUNDLE_ID=com.impervious.browser
MOZ_DISTRIBUTION_ID=com.impervious
if [[ -v MOZ_AUTOMATION ]]; then
  MOZ_SOURCE_REPO="https://github.com/imperviousai/imp-releases"
fi
