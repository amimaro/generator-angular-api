const User = require('../model/user/schema');
const configAuth = require('./auth');

const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GitHubStrategy = require('passport-github').Strategy;

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
      clientID: configAuth.facebookAuth.clientID,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL,
      profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link'],
      passReqToCallback: true
    },
    function(req, token, refreshToken, profile, done) {
      process.nextTick(function() {
        if (!req.user) {
          User.findOne({
            'facebook.id': profile.id
          }, function(err, user) {
            if (err)
              return done(err);
            if (user) {
              return done(null, user);
            } else {
              let newUser = new User();
              newUser.facebook.id = profile.id;
              newUser.facebook.token = token;
              newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
              newUser.facebook.email = profile.emails[0].value;
              newUser.save(function(err) {
                if (err)
                  throw err;
                return done(null, newUser);
              });
            }
          });
        } else {
          let user = req.user;
          user.facebook.id = profile.id;
          user.facebook.token = token;
          user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
          user.facebook.email = profile.emails[0].value;
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      });
    }));

  passport.use(new TwitterStrategy({
      consumerKey: configAuth.twitterAuth.consumerKey,
      consumerSecret: configAuth.twitterAuth.consumerSecret,
      callbackURL: configAuth.twitterAuth.callbackURL,
      passReqToCallback: true
    },
    function(req, token, tokenSecret, profile, done) {
      process.nextTick(function() {
        if (!req.user) {
          User.findOne({
            'twitter.id': profile.id
          }, function(err, user) {
            if (err)
              return done(err);
            if (user) {
              return done(null, user);
            } else {
              let newUser = new User();
              newUser.twitter.id = profile.id;
              newUser.twitter.token = token;
              newUser.twitter.username = profile.username;
              newUser.twitter.displayName = profile.displayName;
              newUser.save(function(err) {
                if (err)
                  throw err;
                return done(null, newUser);
              });
            }
          });
        } else {
          let user = req.user;
          user.twitter.id = profile.id;
          user.twitter.token = token;
          user.twitter.username = profile.username;
          user.twitter.displayName = profile.displayName;
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      });
    }));

  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL,
      passReqToCallback: true
    },
    function(req, token, refreshToken, profile, done) {
      process.nextTick(function() {
        if (!req.user) {
          User.findOne({
            'google.id': profile.id
          }, function(err, user) {
            if (err)
              return done(err);
            if (user) {
              return done(null, user);
            } else {
              let newUser = new User();
              newUser.google.id = profile.id;
              newUser.google.token = token;
              newUser.google.name = profile.displayName;
              newUser.google.email = profile.emails[0].value;
              newUser.save(function(err) {
                if (err)
                  throw err;
                return done(null, newUser);
              });
            }
          });
        } else {
          let user = req.user;
          user.google.id = profile.id;
          user.google.token = token;
          user.google.name = profile.displayName;
          user.google.email = profile.emails[0].value;
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      });
    }));

  passport.use(new GitHubStrategy({
      clientID: configAuth.githubAuth.clientID,
      clientSecret: configAuth.githubAuth.clientSecret,
      callbackURL: configAuth.githubAuth.callbackURL,
      passReqToCallback: true
    },
    function(req, token, refreshToken, profile, done) {
      process.nextTick(function() {
        if (!req.user) {
          User.findOne({
            'github.id': profile.id
          }, function(err, user) {
            if (err)
              return done(err);
            if (user) {
              return done(null, user);
            } else {
              let newUser = new User();
              newUser.github.id = profile.id;
              newUser.github.username = profile.username;
              newUser.github.displayName = profile.displayName;
              newUser.github.publicRepos = profile._json.public_repos;
              newUser.github.email = profile.emails[0].value;
              newUser.save(function(err) {
                if (err)
                  throw err;
                return done(null, newUser);
              });
            }
          });
        } else {
          let user = req.user;
          user.github.id = profile.id;
          user.github.username = profile.username;
          user.github.displayName = profile.displayName;
          user.github.publicRepos = profile._json.public_repos;
          user.github.email = profile.emails[0].value;
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        }
      });
    }));
};
