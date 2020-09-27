var createError = require("http-errors");
var express = require("express");
var path = require("path");
//parse requests
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { connect } = require("./models/db");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");
const flash = require("connect-flash");

var workouts = require("./routes/workouts");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "MySuperSecret",
    saveUninitialized: true,
    resave: false,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", usersRouter);
app.use("/", workouts);

connect();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
