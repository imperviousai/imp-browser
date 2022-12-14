# Impervious Desktop Browser

## Build Locally

To build the browser we first need to download a copy of Firefox and patch it with our
customisations. This process is handled via `fern.js`, which is our tool to handle the patch
workflow. Set up your local workspace as follows:

```sh
git clone <repo>
cd imp-browser
npm ci # Fern.js dependencies
./fern.js use # Pull the correct Firefox and extension sources
./fern.js import-patches # Apply patches to Firefox
```

Once you have Firefox source, you'll have to set up your environment to build the browser. Detailed
instructions are available [for Firefox](https://firefox-source-docs.mozilla.org/setup/index.html),
but in most cases the following will suffice:

```sh
cd mozilla-release
./mach bootstrap
```

Once your build toolchains are setup you can build using the Impervious `mozconfig` file:

```sh
cd mozilla-release
MOZCONFIG=/path/to/imp-browser/brands/impervious/mozconfig ./mach build # start build
./mach run # to launch the browser
```

## Cross platform builds

The local build setup will build the browser for your current platform. To build for other platforms
we provide dockerised builds. These can be run using the `fern.js build` command:

```sh
./fern.js build -t mac
```

Windows and Mac builds depend on platform frameworks being included. These should be placed in the
`build` directory:

- Mac: `MacOSX10.12.sdk.tar.bz2`. This can be found inside an XCode install.
- Mac: `MacOSX11.0.sdk.tar.bz2`. This can be found inside an XCode install.
- Windows: `vs2017_15.8.4.zip` and `Makecab.exe`. See the end of this document to where to find these.

## Development workflow

After cloning the repository,
run the following commands to get started (Note that you will need `npm` and
`node` to be installed on your system):

```sh
./fern.js use # Setup 'mozilla-release' folder using information from '.workspace'
./fern.js import-patches
cd mozilla-release # Do some stuff... and commit your changes
./fern.js export-patches # Check 'patches' folder
```

### Upgrading Impervious

Bumping the Impervious extension bundled with the browser requires the following:

```sh
./fern.js use --impervious v8.5.2
./fern.js reset
./fern.js import-patches
```

### Upgrading Firefox

Whenever a new version is released or if you want to hack on top of another
Firefox version, run the following:

```sh
./fern.js use --firefox 80.0.1
./fern.js reset # Needed if you already had this version locally.
./fern.js import-patches
```

### Building

Building the browser in any flavor can be achived as follows:

```sh
# Prepare 'mozilla-release' folder with correct version and patches.
./fern.js use
./fern.js reset
./fern.js import-patches

# All three commands can be used from Linux and MacOS (except windows cross-build).
./fern.js build --target mac
./fern.js build --target linux
./fern.js build --target windows
```

Then check the content of the `mozilla-release` folder to find the artefacts.

## Setting up a dev environment

`./mach bootstrap` requires a VC checkout of the gecko source to run properly. Use the gecko-dev repo to run `mach bootstrap` and setup your local build environment:

```bash
git clone https://github.com/mozilla/gecko-dev.git
cd gecko-dev
./mach bootstrap
```

Now you should be able use `./mach build` in this project.

Alternatively, the `build-*` scripts in this repo will prepare docker images with a prepared build environment for each platform. The scripts will drop you to a command prompt in a docker container where you can run `./mach build` directly.

# Building on windows

## Prerequisites

### VS2017 Redist

This can be built on windows after setting up a build environment as per [these instructions](https://firefox-source-docs.mozilla.org/setup/windows_build.html#building-firefox-on-windows).
You will need to install the Windows 10 SDK at version `10.0.17134.0`. Then run the following to create `vs2017_15.8.4.zip`:

```bash
./mach python build/windows_toolchain.py create-zip vs2017_15.8.4
```

### Makecab.exe

This is copied from a windows install at `C:\Windows\System32\makecab.exe`.
