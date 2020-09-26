//Heroku URL: TODO
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config/database');
const passport = require('passport');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || config.localdatabase, {useNewUrlParser: true,  useUnifiedTopology: true});
let db = mongoose.connection;

// Check for DB connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(err){
    console.log(err)
});

//Init app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(session({
  secret: 'love node',
  resave: true,
  saveUninitialized: true
}));

var flash = require('connect-flash');

app.use(flash());


app.use(require('connect-flash')());

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Set Public folder
app.use(express.static(path.join(__dirname, 'public')));

  // Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

   // Home route
app.get('/', function(req, res){
    res.render('login');
});

let users = require('./routes/users');
app.use('/users', users);

let programs = require('./routes/programs');
app.use('/programs', programs)

//start server
app.listen(process.env.PORT || 3000, function(){
    console.log('Server started on port: ' + process.env.PORT || 3000);
});

