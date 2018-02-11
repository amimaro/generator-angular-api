const express    = require('express');
const app  = express();
require('dotenv').config()
const port         = process.env.PORT || 8000
const environment  = process.env.NODE_ENV || 'dev'
const configDB     = require('./config/database')
const morgan     = require('morgan');
const helmet     = require('helmet');
const bluebird   = require('bluebird');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

mongoose.Promise = bluebird
mongoose.connect(configDB.mongo.url)

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`The magic happens on http://localhost:${port}`);
})

module.exports = app;
