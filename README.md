# Impervious Browser

> If you are looking to download the full production application. You need to download the Impervious Launcher application to serve both the Browser and the Daemon. This repo contains the code for just the browser itself. Currently, the browser is in ALPHA. It is not production ready yet. 

---

## Build Locally

For context, we use an modified version of Ghostery's [fern.js build system](https://github.com/ghostery/user-agent-desktop) to apply patches and build the browser. Shoutout to the Ghostery team!

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

Additionally, you can package the browser into an proper application. 

```sh
./mach package
```

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

### Upgrading Firefox

Whenever a new version is released or if you want to hack on top of another
Firefox version, run the following:

```sh
./fern.js use --firefox x.x.x
./fern.js reset # Needed if you already had this version locally.
./fern.js import-patches
```
