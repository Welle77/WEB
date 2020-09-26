const { workout } = require("../controllers/workoutController");
const { bcrypt } = require("bcrypt");

const showLogin = async (req, res) => {
  res.render("", { title: "Exerciser" });
};

const showSignup = (req, res) => {
  res.render("signup", { title: "Exerciser" });
};

const signup = async (user) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(user.password, saltRounds);
  user.password = hash;
  const newUser = new User(user);

  newUser.save((err) => {
    if (err) console.log(err);
  });
  return newUser;
};

const login = (user) => {
  //   const matchedUser = User.findOne({ email: user.email }, async (err, user) => {
  //     if (err) console.log(err);
  //     const plaintextPassword = "qwerasdf";
  //     const match = await bcrypt.compare(plaintextPassword, user.password);
  //     if (match) return user;
  //   });
};

module.exports = { showLogin, showSignup, signup, login };
