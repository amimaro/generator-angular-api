const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const foodSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
});


module.exports = mongoose.model('Food', foodSchema);
