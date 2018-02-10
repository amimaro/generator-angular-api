const Facade = require('../../lib/facade');
const userSchema = require('./schema');

class UserFacade extends Facade {
  update(...args) {
    return this.model
      .update(...args)
      .exec();
  }
}

module.exports = new UserFacade(userSchema);
