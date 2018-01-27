var Generator = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = class extends Generator {

  prompting() {

    this.log(yosay(
      'Welcome to ' + chalk.red('angular-api') + ' generator!'
    ))

    this.appname = this.appname.replace(/\s+/g, '-');

    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Project description',
      default: 'Awesome description'
    }, {
      type: 'list',
      name: 'style',
      message: 'What framework do you want to use today?',
      choices: ['None', 'Angular Material', 'Bootstrap', 'Bulma']
    }]).then((answers) => {
      this.props = answers
      this.log('\n\n')
      this.log(chalk.yellow('Name: ' + answers.name))
      this.log(chalk.yellow('Description: ' + answers.description))
      this.log(chalk.yellow('Front-end Framework: ' + answers.style))
      this.log('\n\n')

      this.props.style = this.props.style.toLowerCase().replace('angular ', '')
    })

  }

  writing() {

    let files = [
      ['core/', 'tslint.json'],
      ['core/', 'tsconfig.json'],
      ['core/', 'README.md'],
      ['core/', 'protractor.conf.js'],
      ['core/', 'package.json'],
      ['core/', 'karma.conf.js'],
      ['core/', 'gulpfile.js'],
      ['core/', '.gitignore'],
      ['core/', '.editorconfig'],
      ['core/', '.angular-cli.json'],
      ['core/', 'e2e'],
      ['core/', 'server'],
      ['core/', 'client/typings.d.ts'],
      ['core/', 'client/tsconfig.spec.json'],
      ['core/', 'client/tsconfig.app.json'],
      ['core/', 'client/test.ts'],
      ['core/', 'client/polyfills.ts'],
      ['core/', 'client/main.ts'],
      ['core/', 'client/favicon.ico'],
      ['core/', 'client/environments'],
      ['core/', 'client/assets/.gitkeep'],
    ]

    files.push(['styles/' + this.props.style + '/', 'client/app'])
    files.push(['styles/' + this.props.style + '/', 'client/index.html'])
    files.push(['styles/' + this.props.style + '/', 'client/styles.css'])
    files.push(['styles/' + this.props.style + '/', '.angular-cli.json'])

    switch (this.props.style) {
      case 'material':
        this.props.style = '@angular/material @angular/cdk @angular/animations'
        break
      case 'bootstrap':
        this.props.style = 'jquery bootstrap'
        break
      case 'bulma':
        this.fs.copy(
          this.templatePath('styles/bulma/client/assets/made-with-bulma.png'),
          this.destinationPath('client/assets/made-with-bulma.png'))
        this.props.style = 'bulma'
        break
      default:
        break
    }

    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(file[0] + file[1]),
        this.destinationPath(file[1]), {
          name: this.props.name,
          description: this.props.description
        }
      )
    }

  }

  install() {
    this.npmInstall(this.props.style.split(' '), {
      'save': true
    })
    this.npmInstall().then(() => {
      this.log('\n\nEverything is ready!!')
      this.log('Run ' + chalk.green('npm run dev') + ' to start creating.\n')
    })
  }

};
