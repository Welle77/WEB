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
    async function (username, password, done) {
      const user = await User.findOne({ email: username }, (err, user) => {
        if (err) console.log(err);
        return user;
      });

      if (!user) {
        return done(null, false, {
          message: "Incorrect username.",
        });
      }

      const validity = await isPasswordValid(password, user.password);
      if (!validity) {
        return done(null, false, {
          message: "Incorrect password.",
        });
      }
      return done(null, user);
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
