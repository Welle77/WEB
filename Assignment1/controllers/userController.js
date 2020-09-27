const bcrypt = require("bcrypt");
const { User } = require("../models/schemas");

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
    console.log(hash);
    user.password = hash;
    user.save((err, user) => {
      console.log(user);
      if (err) {
        console.log(err);
        res.render("signup");
      } else {
        res.render("");
      }
    });
  });
};

const login = (req, res) => {
  res.redirect("/workouts");
};

module.exports = { showLogin, showSignup, signup, login };
