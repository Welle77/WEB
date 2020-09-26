const {
  createWorkout,
  addExercise,
} = require("../controllers/workoutController");
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
  addExercise(req, res);
  //   const matchedUser = User.findOne({ email: user.email }, async (err, user) => {
  //     if (err) console.log(err);
  //     const plaintextPassword = "qwerasdf";
  //     const match = await bcrypt.compare(plaintextPassword, user.password);
  //     if (match) return user;
  //   });
};

module.exports = { showLogin, showSignup, signup, login };
