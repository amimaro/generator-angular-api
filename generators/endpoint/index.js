var Generator = require('yeoman-generator')
const to = require('to-case');

module.exports = class extends Generator {

  prompting() {

    return this.prompt([{
      type: 'input',
      name: 'endpoint',
      message: 'Name of the endpoint:',
    }]).then((answers) => {
      this.props = answers
      this.log('Endpoint: ' + this.props.endpoint)
      this.log('\n\n')
    })

  }

  writing() {

    if (this.fs.exists(this.destinationPath('server/model/' + to.slug(this.props.endpoint) + '/constroller.js'))) {
      this.log(`Endpoint ${to.slug(this.props.endpoint)} already exists`);
      return;
    }

    this.fs.copyTpl(
      this.templatePath('endpoint/'),
      this.destinationPath('server/model/' + to.slug(this.props.endpoint)), {
        camel: to.camel(this.props.endpoint),
        pascal: to.pascal(this.props.endpoint),
        slug: to.slug(this.props.endpoint)
      })
  }

};
