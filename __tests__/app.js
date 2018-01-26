'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-angular-api:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'name',
        description: 'description'
      });
  });

  it('create config files', () => {
    assert.file([
      '.angular-cli.json',
      'karma.conf.js',
      'package.json',
      'protractor.conf.js',
      'tsconfig.json',
      'tslint.json',
    ]);
  });

  it('creates server', () => {
    assert.file([
      'server/index.js',
      'server/config.js',
      'server/routes.js',
    ]);
  });

  it('creates client', () => {
    assert.file([
      'client/index.html',
      'client/main.ts',
      'client/polyfills.ts',
      'client/styles.css',
      'client/test.ts',
      'client/tsconfig.app.json',
      'client/tsconfig.spec.json',
      'client/typings.d.ts',
      'client/app/app.component.css',
      'client/app/app.component.html',
      'client/app/app.component.spec.ts',
      'client/app/app.component.ts',
      'client/app/app.module.ts',
      'client/app/pages/home/home.component.css',
      'client/app/pages/home/home.component.html',
      'client/app/pages/home/home.component.spec.ts',
      'client/app/pages/home/home.component.ts',
      'client/app/pages/not-found/not-found.component.css',
      'client/app/pages/not-found/not-found.component.html',
      'client/app/pages/not-found/not-found.component.spec.ts',
      'client/app/pages/not-found/not-found.component.ts',
    ]);
  });

});
