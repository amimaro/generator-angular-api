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
yo angular-api
```

## The Project

### Front-end

This front-end was generated based on [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Back-end

The back-end api was generated based on [generator-api](https://github.com/ndelvalle/generator-api) project which uses NodeJS, Express and Mongoose.

To run locally, requires MongoDB installed and running ([Install MongoDB](https://docs.mongodb.com/manual/installation/)).

### File tree
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

### Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:8080/`. Wait until the app is built. The app will automatically rebuild if you change any of the source files.

##### .env example (place it on root directory)
```
PORT=8080
NODE_ENV=dev
APP_URL=http://localhost:8080/
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


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


[npm-image]: https://badge.fury.io/js/generator-angular-api.svg
[npm-url]: https://npmjs.org/package/generator-angular-api
[travis-image]: https://travis-ci.org/amimaro/generator-angular-api.svg?branch=master
[travis-url]: https://travis-ci.org/amimaro/generator-angular-api
[daviddm-image]: https://david-dm.org/amimaro/generator-angular-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amimaro/generator-angular-api
