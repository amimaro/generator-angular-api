[![npm version](https://badge.fury.io/js/generator-angular-api.svg)](https://badge.fury.io/js/generator-angular-api) [![dependencies Status](https://david-dm.org/amimaro/generator-angular-api/status.svg)](https://david-dm.org/amimaro/generator-angular-api) [![Build Status](https://travis-ci.org/amimaro/generator-angular-api.svg?branch=master)](https://travis-ci.org/amimaro/generator-angular-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/fc32f4fa319476844aa4/maintainability)](https://codeclimate.com/github/amimaro/generator-angular-api/maintainability)


## generator-angular-api

RESTful fullstack generator with [Angular CLI](https://github.com/angular/angular-cli), [Express.js](https://expressjs.com) and [Mongoose](https://mongoosejs.com).
It has three options of design components [Bulma](https://bulma.io/), [Bootstrap](https://getbootstrap.com/) and [Angular Material](https://material.angular.io/), each one with a basic template to start developing.

## Generator Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-api using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular-api
```

Then generate your new project:

```bash
yo angular-api
```

### Getting started

```bash
npm run dev
```

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. Wait until the app is built. At any change, the app will automatically rebuild and sync the browser.

##### .env example (place it on root directory)
```
PORT=3000
NODE_ENV=dev
APP_URL=http://localhost:3000/
MONGO_DB_URI=http://localhost:27017/angular-api
```

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


## Packages

### Front-end

This front-end was generated based on [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

##### Modules

Angular modules already added.

| Name             | Version                                                                                                         | Docs                                                                                                                | Description                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Routes           | [![npm package](https://badge.fury.io/js/%40angular%2Frouter.svg)](https://www.npmjs.com/package/@angular/router) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://angular.io/api/router/Routes)                | Routes is an array of route configurations.                     |
| RouterModule     | [![npm package](https://badge.fury.io/js/%40angular%2Frouter.svg)](https://www.npmjs.com/package/@angular/router) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://angular.io/api/router/RouterModule)          | Adds router directives and providers.                           |
| HttpClientModule | [![npm package](https://badge.fury.io/js/%40angular%2Fcommon.svg)](https://www.npmjs.com/package/@angular/common) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://angular.io/api/common/http/HttpClientModule) | NgModule which provides the HttpClient and associated services. |
| FormsModule      | [![npm package](https://badge.fury.io/js/%40angular%2Fforms.svg)](https://www.npmjs.com/package/@angular/forms)  | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://angular.io/api/forms/FormsModule)            | The ng module for forms.                                        |

##### Design components

The generator has three design options.

| Name             | Version                                                                                         | Docs                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Bulma            | [![npm package](https://badge.fury.io/js/bulma.svg)](https://www.npmjs.com/package/bulma)             | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://bulma.io/documentation/overview/start/)                  |
| Bootstrap        | [![npm package](https://badge.fury.io/js/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)         | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://getbootstrap.com/docs/4.0/getting-started/introduction/) |
| Angular Material | [![npm package](https://badge.fury.io/js/%40angular%2Fmaterial.svg)](https://www.npmjs.com/package/@angular/material) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://material.angular.io/components/categories)               |

### Back-end

The back-end api was generated based on [generator-api](https://github.com/ndelvalle/generator-api) project which uses NodeJS, Express and Mongoose.

To run locally, requires MongoDB installed and running ([Install MongoDB](https://docs.mongodb.com/manual/installation/)).

##### Packages

| Name        | Version                                                                                                     | Docs                                                                                                                       | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| express.js  | [![npm package](https://badge.fury.io/js/express.svg)](https://www.npmjs.com/package/express)     | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://expressjs.com/)                   | Minimalist web framework for Node.js                                                                   |
| mongoose    | [![npm package](https://badge.fury.io/js/mongoose.svg)](https://www.npmjs.com/package/mongoose)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](http://mongoosejs.com/docs/guide.html)    | Elegant MongoDB object modeling for Node.js                                                            |
| body-parser | [![npm package](https://badge.fury.io/js/body-parser.svg)](https://www.npmjs.com/package/body-parser) | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/body-parser) | Node.js body parsing middleware                                                                        |
| morgan      | [![npm package](https://badge.fury.io/js/morgan.svg)](https://www.npmjs.com/package/morgan)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/expressjs/morgan)      | HTTP request logger middleware for node.js                                                             |
| bluebird    | [![npm package](https://badge.fury.io/js/bluebird.svg)](https://www.npmjs.com/package/bluebird)    | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/petkaantonov/bluebird) | Bluebird is a fully featured promise library with focus on innovative features and performance         |
| dotenv      | [![npm package](https://badge.fury.io/js/dotenv.svg)](https://www.npmjs.com/package/dotenv)      | [![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/motdotla/dotenv)       | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |

## File tree
```
├── client
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   └── home.component.ts
│   │   │   └── not-found
│   │   │       ├── not-found.component.css
│   │   │       ├── not-found.component.html
│   │   │       ├── not-found.component.spec.ts
│   │   │       └── not-found.component.ts
│   │   └── services
│   │       ├── app.service.spec.ts
│   │       └── app.service.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── .gitignore
├── .angular-cli.json
├── .editorconfig
├── gulpfile.js
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── server
│   ├── config.js
│   ├── index.js
│   ├── lib
│   │   ├── controller.js
│   │   └── facade.js
│   ├── model
│   │   ├── food
│   │   │   ├── controller.js
│   │   │   ├── facade.js
│   │   │   ├── router.js
│   │   │   └── schema.js
│   │   └── user
│   │       ├── controller.js
│   │       ├── facade.js
│   │       ├── router.js
│   │       └── schema.js
│   └── routes.js
├── tsconfig.json
└── tslint.json
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
