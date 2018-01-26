var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {

    this.log(yosay(
      'Welcome to ' + chalk.red('angular-api') + ' generator!'
    ));

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
    }]).then((answers) => {
      this.props = answers
      this.log(answers.name);
    });
  }

  writing() {

    this.fs.copy(
      this.templatePath(''),
      this.destinationPath(''), {
        name: this.props.name,
        description: this.props.description
      }
    );

    let files = [
      'package.json',
      '.angular-cli.json',
      'server/config.js',
      'e2e/app.e2e-spec.ts',
      'client/index.html',
      'README.md'
    ]
    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file), {
          name: this.props.name,
          description: this.props.description
        }
      );
    }

  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    }).then(() => console.log('Everything is ready!'));
  }

};
