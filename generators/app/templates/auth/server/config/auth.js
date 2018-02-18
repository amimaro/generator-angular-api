'use strict';

module.exports = {

  'facebookAuth': {
    'clientID': process.env.FACEBOOK_KEY,
    'clientSecret': process.env.FACEBOOK_SECRET,
    'callbackURL': process.env.CALLBACK_URL + 'api/user/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields': ['id', 'email', 'name']
  },

  'twitterAuth': {
    'consumerKey': process.env.TWITTER_KEY,
    'consumerSecret': process.env.TWITTER_SECRET,
    'callbackURL': process.env.CALLBACK_URL + 'api/user/auth/twitter/callback'
  },

  'googleAuth': {
    'clientID': process.env.GOOGLE_KEY,
    'clientSecret': process.env.GOOGLE_SECRET,
    'callbackURL': process.env.CALLBACK_URL + 'api/user/auth/google/callback'
  },

  'githubAuth': {
    'clientID': process.env.GITHUB_KEY,
    'clientSecret': process.env.GITHUB_SECRET,
    'callbackURL': process.env.CALLBACK_URL + 'api/user/auth/github/callback'
  }

};
