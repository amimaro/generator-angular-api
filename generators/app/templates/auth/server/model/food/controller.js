const Controller = require('../../lib/controller');
const foodFacade = require('./facade');

class FoodController extends Controller {}

module.exports = new FoodController(foodFacade);
