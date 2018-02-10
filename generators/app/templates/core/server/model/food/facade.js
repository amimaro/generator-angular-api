const Facade = require('../../lib/facade');
const foodSchema = require('./schema');

class FoodFacade extends Facade {}

module.exports = new FoodFacade(foodSchema);
