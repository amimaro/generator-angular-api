const Facade = require('../../lib/facade');
const <%= camel %> = require('./schema');

class <%= pascal %> extends Facade {}

module.exports = new <%= pascal %>(<%= camel %>);
