const path = require('path');
const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const food = require('./model/food/router');

router.use('/api/user', user);
router.use('/api/food', food);

router.get('*', function(req, res) {
  res.sendfile(path.resolve('client/dist/index.html'));
});

module.exports = router;
