var Generator = require('yeoman-generator')
const to = require('to-case');

module.exports = class extends Generator {

  prompting() {

    return this.prompt([{
      type: 'confirm',
      name: 'dotenv',
      message: 'Would you like to create a .env file?'
    }]).then((answers) => {
      this.props = answers
      this.log('dotenv: ' + this.props.dotenv)
      this.log('\n\n')
    })

  }

  writing() {
    if (this.fs.exists(this.destinationPath('.env'))) {
      this.log(`dotenv file already exists`);
      return;
    }

    this.fs.copyTpl(
      this.templatePath('dotenv/env'),
      this.destinationPath('.env'), {
        slug: to.slug(this.appname)
      })
  }

};
