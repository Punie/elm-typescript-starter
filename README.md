# RollinMH Client

[![CircleCI](https://circleci.com/gh/RollinMH/rollinmh-client/tree/master.svg?style=svg)](https://circleci.com/gh/RollinMH/rollinmh-client/tree/master)

## Getting started :rocket:

### Prerequisite

Most dependencies are specified in [`package.json`](package.json) so that you don't need to install a lot of tools globally to get up and running such as the TypeScript compiler, the Elm compiler, various static analysis and testing tools, etc...

That being said, you will at the very least need the following two:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/en/)

**Note**: In the case of Node.js, the recomended version is the one specified in [`.nvmrc`](.nvmrc). If you are using [nvm](https://github.com/creationix/nvm) (you should :wink:), just run `nvm use` when in the root directory of the project and you will be all set.

### Development

The easiest way to get started and make sure that you have everything you need is to launch a development server.

```sh
yarn serve
```

This should build the project in `development` mode and automatically open your web browser at [http://localhost:1234/](http://localhost:1234/). It will also watch your source files for changes and reload the page for you.

**Note**: It uses Hot Module Replacement ([HMR](https://parceljs.org/hmr.html)) to preserve the state of your application instead of performing a full reload. Unfortunately, on some occasions, HMR won't be able to properly update your application state, in which case you will need to refresh manually.

### Build

Should you want to inspect the compiled artifacts in production mode (eg. to determine the bundle size) you can do so with a simple command as well.

```sh
yarn build
```

The resulting bundle will be placed in a `build` directory at the root of the project.

## Maintainers :busts_in_silhouette:

[@Punie](https://github.com/Punie) - _Hugo Saracino_

[@DataMorgane](https://github.com/DataMorgane) - _Morgane Flauder_

## License :page_facing_up:

[BSD-3-Clause](LICENSE) :copyright: Hugo Saracino & Morgane Flauder
