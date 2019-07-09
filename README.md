# Elm - Typescript - Parcel starter project

[![CircleCI](https://circleci.com/gh/Punie/elm-typescript-starter/tree/master.svg?style=svg)](https://circleci.com/gh/Punie/elm-typescript-starter/tree/master)

## Getting started :rocket:

### Prerequisite

Most dependencies are specified in [`package.json`](package.json) so that you don't need to install a lot of tools globally to get up and running such as the TypeScript compiler, the Elm compiler, various static analysis and testing tools, code formatters, etc...

That being said, you will at the very least need the following two:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/en/)

**Note**: In the case of Node.js, the recomended version is the one specified in [`.nvmrc`](.nvmrc). If you are using [nvm](https://github.com/creationix/nvm) (as you should :wink:), just run `nvm use` when in the root directory of the project and you will be all set (you might need to run `nvm install` beforehand if the specified version is not already present on your system).

### Development

The easiest way to get started and make sure that you have everything you need is to launch a development server.

```sh
yarn serve
```

This should build the project in `development` mode and automatically open your web browser at [http://localhost:1234/](http://localhost:1234/). It will also watch your source files for changes and reload the page for you.

**Note**: It uses Hot Module Replacement ([HMR](https://parceljs.org/hmr.html)) to preserve the state of your application instead of performing a full reload. Unfortunately, on some occasions, HMR won't be able to properly update your application state, in which case you will need to refresh manually.

### Additional tools

For convenience, you can run the elm test suite in one go or in watch mode during development (if you are a proud TDD practictionner) by executing the following command in a separate terminal window:

```sh
# Run once
yarn test

# Run in watch mode
yarn tdd
```

You also have access to real-time code analytics provided by the excellent [`elm-analyse`](https://github.com/stil4m/elm-analyse) and offline documentation for all installed elm dependencies thanks to the amazing [`elm-doc-preview`](https://github.com/dmy/elm-doc-preview):

```sh
# Code analysis
yarn analyse

# Offline documentation
yarn docs
```

Finally, it is highly recommended that you set up your editor to format elm code on save using [`elm-format`](https://github.com/avh4/elm-format).

**Note**: The CI environment will perform all these checks for you upon pushing to the repository:

- build from scratch
- run tests
- lint elm code using `elm-analyse`
- lint TS code using `ts-lint`
- ensure elm code is formatted properly using `elm-format --verify`

Should any of these fail, your entire build will be marked as failed. We recognize it may be a little annoying but we are commited to keep a clean and high quality code base.

### Build

Should you want to inspect the compiled artifacts in production mode (eg. to determine the bundle size) you can do so with a simple command as well.

```sh
yarn build
```

The resulting bundle will be placed in a `build` directory at the root of the project.

## Maintainer :busts_in_silhouette:

[@Punie](https://github.com/Punie) - _Hugo Saracino_

## Contributors

[@DataMorgane](https://github.com/DataMorgane) - _Morgane Flauder_

## License :page_facing_up:

[BSD-3-Clause](LICENSE) :copyright: Hugo Saracino
