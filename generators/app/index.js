var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {

  contructor(args, opts) {
    super(args, opts)

    this.log(yosay(
      'Welcome to ' + chalk.red('angular-api') + ' generator!'
    ));
  }

  prompting() {
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
      this.destinationPath('')
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description
      }
    );
    this.fs.copyTpl(
      this.templatePath('.angular-cli.json'),
      this.destinationPath('.angular-cli.json'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('server/config.js'),
      this.destinationPath('server/config.js'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('e2e/app.e2e-spec.ts'),
      this.destinationPath('e2e/app.e2e-spec.ts'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('client/index.html'),
      this.destinationPath('client/index.html'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        name: this.props.name
      }
    );

  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    }).then(() => console.log('Everything is ready!'));
  }

};
