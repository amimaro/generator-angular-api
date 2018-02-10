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
      message: 'What css framework do you want to use today?',
      choices: [
        'None',
        'Bulma (https://bulma.io/)',
        'Bootstrap (https://getbootstrap.com/)',
        'Angular Material (https://material.angular.io/)'
      ]
    }, {
      type: 'list',
      name: 'icon',
      message: 'More Icons?',
      choices: [
        'No, thanks!',
        'Fontawesome (http://fontawesome.io/)',
        'Feather (https://feathericons.com/)'
      ]
    }, {
      type: 'list',
      name: 'auth',
      message: 'Wanna add authentication? (Facebook, Google, Twitter, Github)',
      choices: [
        'No',
        'Yes'
      ]
    }]).then((answers) => {
      this.props = answers
      this.props.packs = ''
      this.log('\n\n')
      this.log(chalk.yellow('Name: ' + answers.name))
      this.log(chalk.yellow('Description: ' + answers.description))
      this.log(chalk.yellow('Front-end CSS Framework: ' + answers.style))
      this.log(chalk.yellow('Icon: ' + answers.icon))
      this.log(chalk.yellow('Auth: ' + answers.auth))
      this.log('\n\n')

      this.props.style = this.props.style.toLowerCase().replace('angular ', '').replace(/\s\((.*)/, '')
      this.props.icon = this.props.icon.toLowerCase().replace(/\s\((.*)/, '')
      this.props.feather = ''
    })

  }

  writing() {

    let files = [
      ['core/', 'tslint.json'],
      ['core/', 'tsconfig.json'],
      ['core/', 'README.md'],
      ['core/', 'protractor.conf.js'],
      ['core/', 'karma.conf.js'],
      ['core/', 'gulpfile.js'],
      ['core/', '.editorconfig'],
      ['core/', 'e2e'],
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

    if (this.props.auth === 'No') {
      files.push(['core/', 'package.json'])
      files.push(['styles/' + this.props.style + '/', 'client/app'])
      files.push(['core/', 'server'])
    } else {
      files.push(['auth/', 'package.json'])
      files.push(['auth/styles/' + this.props.style + '/', 'client/app'])
      files.push(['auth/', 'server'])
    }

    files.push(['styles/' + this.props.style + '/', 'client/index.html'])
    files.push(['styles/' + this.props.style + '/', 'client/main.ts'])
    files.push(['styles/' + this.props.style + '/', 'client/styles.css'])
    files.push(['styles/' + this.props.style + '/', 'client/dist/index.html'])

    switch (this.props.style) {
      case 'bulma':
        this.fs.copy(
          this.templatePath('styles/bulma/client/assets/made-with-bulma.png'),
          this.destinationPath('client/assets/made-with-bulma.png'))
        this.props.packs = 'bulma'
        break
      case 'bootstrap':
        this.props.packs = 'jquery bootstrap'
        break
      case 'material':
        this.props.packs = '@angular/material@5.1.0 @angular/cdk @angular/animations @angular/forms hammerjs'
        break
      default:
        break
    }

    switch (this.props.icon) {
      case 'fontawesome':
        this.props.packs += ' font-awesome'
        files.push(['styles/' + this.props.style + '/icons/fontawesome', '.angular-cli.json'])
        break
      case 'feather':
        this.props.packs += ' feather-icons'
        files.push(['styles/' + this.props.style + '/icons/feather', '.angular-cli.json'])
        this.props.feather = "<script>window.onload = function() {feather.replace()}</script>"
        break
      default:
        files.push(['styles/' + this.props.style + '/', '.angular-cli.json'])
        break
    }

    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(file[0] + file[1]),
        this.destinationPath(file[1]), {
          name: this.props.name,
          description: this.props.description,
          feather: this.props.feather
        }
      )
    }
    this.fs.copy(
      this.templatePath('core/_.gitignore'),
      this.destinationPath('.gitignore'), {
        name: this.props.name,
        description: this.props.description
      }
    )

  }

  install() {
    this.npmInstall(this.props.packs.split(' '), {
      'save': true
    })
    this.npmInstall().then(() => {
      this.log('\n\nDone!!')
      this.log('Run ' + chalk.green('npm run dev') + ' to start creating.\n')
    })
  }

};
