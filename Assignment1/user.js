const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { userSchema } = require("./schemas");
const User = mongoose.model("User", userSchema);

const create = async (user) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(user.password, saltRounds);
  user.password = hash;
  const newUser = new User(user);

  await newUser.save((err) => {
    if (err) console.log(err);
  });
  return newUser;
};

const login = async (user) => {
  const matchedUser = User.findOne({ email: user.email }, async (err, user) => {
    if (err) console.log(err);
    const plaintextPassword = "qwerasdf";
    const match = await bcrypt.compare(plaintextPassword, user.password);
    if (match) return user;
  });
  return matchedUser;
};

module.exports = { create, login };
