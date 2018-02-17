const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  github: {
    id: String,
    username: String,
    displayName: String,
    email: String,
    publicRepos: String
  },
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);
