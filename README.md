# generator-angular-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
>

## Generator Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-api using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular-api
```

Then generate your new project:

```bash
yo rest-angular
```

## The Project

### Front-end

This front-end was generated based on [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Back-end

The back-end api was generated based on [generator-api](https://github.com/ndelvalle/generator-api) project which uses NodeJS, Express and Mongoose.

To run locally, requires MongoDB installed and running ([Install MongoDB](https://docs.mongodb.com/manual/installation/)).

### Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:8080/`. Wait until the app is built. The app will automatically rebuild if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `client/dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


[npm-image]: https://badge.fury.io/js/generator-angular-api.svg
[npm-url]: https://npmjs.org/package/generator-angular-api
[travis-image]: https://travis-ci.org/Amimaro/generator-angular-api.svg?branch=master
[travis-url]: https://travis-ci.org/Amimaro/generator-angular-api
[daviddm-image]: https://david-dm.org/Amimaro/generator-angular-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Amimaro/generator-angular-api
