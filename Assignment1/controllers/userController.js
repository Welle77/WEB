const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { userSchema } = require("../models/schemas");
const User = mongoose.model("User", userSchema);

const showLogin = async (req, res) => {
  res.render("", { title: "Exerciser" });
};

const showSignup = (req, res) => {
  res.render("signup", { title: "Exerciser" });
};

const signup = (req, res) => {
  const { email, password, name } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds).then((hash) => {
    const user = new User();
    user.email = email;
    user.name = name;
    user.workouts = [];
    console.log(hash);
    user.password = hash;
    user.save((err, user) => {
      console.log(user);
      if (err) {
        console.log(err);
        res.render("signup");
      } else {
        res.render("/workouts");
      }
    });
  });
};

const login = (req, res) => {
  res.redirect("/workouts");
};

module.exports = { showLogin, showSignup, signup, login };
