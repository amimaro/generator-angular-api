const Controller = require('../../lib/controller');
const userFacade = require('./facade');
const passport = require('passport');


class UserController extends Controller {

  // Returns Session if Logged-in
  getSession(req, res, next) {
    res.json(req.user);
  }

  // Logout
  logout(req, res, next) {
    req.logout();
    res.redirect('/login');
  }

  // Facebook

  authenticateFacebook(req, res, next) {
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })(req, res, next);
  }

  authorizeFacebook(req, res, next) {
    passport.authorize('facebook', {
      scope: ['public_profile', 'email']
    })(req, res, next);
  }

  callbackAuthFacebook(req, res, next) {
    passport.authenticate('facebook', function(err, data) {
      if (err)
        return next(err);
      req.login(data, function(err) {
        if (err)
          return next(err);
        return res.redirect('/profile');
      });
    })(req, res, next);
  }

  callbackAuthzFacebook(req, res, next) {
    passport.authorize('facebook', function(err, data) {
      if (err)
        return next(err);
      if (data)
        req.session.user = data
      res.redirect('/profile')
    })(req, res, next);
  }

  unlinkFacebook(req, res, next) {
    this.facade.update({
        _id: req.user._id
      }, {
        $unset: {
          facebook: 1
        }
      })
      .then((results) => {
        delete req.user.facebook
        res.redirect('/profile');
      })
      .catch(err => next(err));
  }

  // Twitter

  authenticateTwitter(req, res, next) {
    passport.authenticate('twitter')(req, res, next);
  }

  authorizeTwitter(req, res, next) {
    passport.authorize('twitter')(req, res, next);
  }

  callbackAuthTwitter(req, res, next) {
    passport.authenticate('twitter', function(err, data) {
      if (err)
        return next(err);
      req.login(data, function(err) {
        if (err)
          return next(err);
        return res.redirect('/profile');
      });
    })(req, res, next);
  }

  callbackAuthzTwitter(req, res, next) {
    passport.authorize('twitter', function(err, data) {
      if (err)
        return next(err);
      if (data)
        req.session.user = data
      res.redirect('/profile')
    })(req, res, next);
  }

  unlinkTwitter(req, res, next) {
    this.facade.update({
        _id: req.user._id
      }, {
        $unset: {
          twitter: 1
        }
      })
      .then((results) => {
        delete req.user.twitter
        res.redirect('/profile');
      })
      .catch(err => next(err));
  }

  // Google

  authenticateGoogle(req, res, next) {
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })(req, res, next);
  }

  authorizeGoogle(req, res, next) {
    passport.authorize('google', {
      scope: ['profile', 'email']
    })(req, res, next);
  }

  callbackAuthGoogle(req, res, next) {
    passport.authenticate('google', function(err, data) {
      if (err)
        return next(err);
      req.login(data, function(err) {
        if (err)
          return next(err);
        return res.redirect('/profile');
      });
    })(req, res, next);
  }

  callbackAuthzGoogle(req, res, next) {
    passport.authorize('google', function(err, data) {
      if (err)
        return next(err);
      if (data)
        req.session.user = data
      res.redirect('/profile')
    })(req, res, next);
  }

  unlinkGoogle(req, res, next) {
    this.facade.update({
        _id: req.user._id
      }, {
        $unset: {
          google: 1
        }
      })
      .then((results) => {
        delete req.user.google
        res.redirect('/profile');
      })
      .catch(err => next(err));
  }

  // Github

  authenticateGithub(req, res, next) {
    passport.authenticate('github')(req, res, next);
  }

  authorizeGithub(req, res, next) {
    passport.authorize('github')(req, res, next);
  }

  callbackAuthGithub(req, res, next) {
    passport.authenticate('github', function(err, data) {
      if (err)
        return next(err);
      req.login(data, function(err) {
        if (err)
          return next(err);
        return res.redirect('/profile');
      });
    })(req, res, next);
  }

  callbackAuthzGithub(req, res, next) {
    passport.authorize('github', function(err, data) {
      if (err)
        return next(err);
      res.redirect('/profile')
    })(req, res, next);
  }

  unlinkGithub(req, res, next) {
    this.facade.update({
        _id: req.user._id
      }, {
        $unset: {
          github: 1
        }
      })
      .then((results) => {
        delete req.user.github
        res.redirect('/profile');
      })
      .catch(err => next(err));
  }

}

module.exports = new UserController(userFacade);
