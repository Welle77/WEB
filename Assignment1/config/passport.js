const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const { userSchema } = require("../models/schemas");
const User = mongoose.model("User", userSchema);
const bcrypt = require("bcrypt");

const isPasswordValid = async (plaintextPassword, hash) => {
  return await bcrypt.compare(plaintextPassword, hash);
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (username, password, done) {
      User.findOne({ email: username }, async function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Incorrect username.",
          });
        }
        const validity = await isPasswordValid(password, user.password);
        console.log(validity);
        if (!validity) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
