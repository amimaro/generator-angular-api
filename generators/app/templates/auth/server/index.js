const express      = require('express')
const app  = express()
require('dotenv').config()
const port         = process.env.PORT || 8000
const environment  = process.env.NODE_ENV || 'dev'
const helmet       = require('helmet')
const morgan       = require('morgan')
const passport     = require('passport')
const bluebird     = require('bluebird')
const mongoose     = require('mongoose')
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const session      = require('express-session')
const configDB     = require('./config/database')
const routes       = require('./routes')
require('./config/passport')(passport);

mongoose.Promise = bluebird
mongoose.connect(configDB.mongo.url)

app.use(helmet())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({ secret: 'somesecretmoresecretthanallsecrets' }))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(__dirname + '/../client/dist'))
app.use('/', routes)

app.listen(port, () => {
  console.log(`The magic happens on http://localhost:${port}`);
})

module.exports = app
