const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { userSchema, workoutProgramSchema } = require("./schemas");

const create = (user) => {
  const saltRounds = 10;
  bcrypt.hash(user.password, saltRounds).then(async (hash) => {
    const User = mongoose.model("User", userSchema);
    const Workouts = mongoose.model("Workout", workoutProgramSchema);
    user.password = hash;
    const newUser = new User(user);

    await newUser.save((err) => {
      if (err) console.log(err);
    });
  });
};

const login = (user) => {
  const User = mongoose.model("User", userSchema);
  User.findOne({ email: user.email }, async (err, user) => {
    if (err) console.log(err);
    const plaintextPassword = "Hejhsa";

    const match = await bcrypt.compare(plaintextPassword, user.password);

    mongoose.disconnect();

    console.log(match);
  });
};

module.exports = { userSchema, create, login };
