const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

router.route('/auth/session')
  .get(isLoggedIn, controller.getSession)
router.route('/auth/logout')
  .get(isLoggedIn, controller.logout);

// Facebook Routes
router.route('/auth/facebook/login')
  .get(controller.authenticateFacebook);
router.route('/auth/facebook/callback')
  .get(controller.callbackAuthFacebook);
router.route('/connect/facebook/login')
  .get(controller.authorizeFacebook)
router.route('/connect/facebook/callback')
  .get(controller.callbackAuthzFacebook)
router.route('/unlink/facebook')
  .get((...args) => controller.unlinkFacebook(...args))

// Twitter Routes
router.route('/auth/twitter/login')
  .get(controller.authenticateTwitter);
router.route('/auth/twitter/callback')
  .get(controller.callbackAuthTwitter);
router.route('/connect/twitter/login')
  .get(controller.authorizeTwitter)
router.route('/connect/twitter/callback')
  .get(controller.callbackAuthzTwitter)
router.route('/unlink/twitter')
  .get((...args) => controller.unlinkTwitter(...args))

// Google Routes
router.route('/auth/google/login')
  .get(controller.authenticateGoogle);
router.route('/auth/google/callback')
  .get(controller.callbackAuthGoogle);
router.route('/connect/google/login')
  .get(controller.authorizeGoogle)
router.route('/connect/google/callback')
  .get(controller.callbackAuthzGoogle)
router.route('/unlink/google')
  .get((...args) => controller.unlinkGoogle(...args))

// Github Routes
router.route('/auth/github/login')
  .get(controller.authenticateGithub);
router.route('/auth/github/callback')
  .get(controller.callbackAuthGithub);
router.route('/connect/github/login')
  .get(controller.authorizeGithub)
router.route('/connect/github/callback')
  .get(controller.callbackAuthzGithub)
router.route('/unlink/github')
  .get((...args) => controller.unlinkGithub(...args))


module.exports = router;
