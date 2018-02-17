const Controller = require('../../lib/controller');
const <%= camel %> = require('./facade');

class <%= pascal %> extends Controller {}

module.exports = new <%= pascal %>(<%= camel %>);
