const { Workout } = require("../models/schemas");

const mongoose = require("mongoose");
const { userSchema } = require("../models/schemas");
const User = mongoose.model("User", userSchema);
const { createWorkout } = require("../models/workout");

module.exports.addWorkout = function (req, res) {
  res.render("add_workout", {
    title: "Add Workout",
  });
};

module.exports.createWorkout = function (req, res) {
  const user = User.findById("5f69a14c6be1ac5a98acf8d7", async (err, user) => {
    if (err) console.log(err);
    let workout = new Workout();
    workout.name = req.body.workout_field;
    user.workouts.push(workout);
    await user.save();
    return user;
  });
  return user;
};

module.exports.getWorkoutList = function (req, res) {
  const { user: userID } = req.session.passport;

  User.findById(userID, (err, user) => {
    console.log(user);
    if (err) console.log(err);
    res.render("workouts", { workouts: user.workouts });
  });
};

module.exports.getWorkout = function (req, res) {
  const { id: workoutID } = req.params;
  const { user: userID } = req.session.passport;

  User.findById(userID, (err, user) => {
    const workout = user.workouts.id(workoutID);

    if (workout.exercises)
      res.render("workout", {
        exercises: workout.exercises,
        title: workout.name,
      });
    else res.render("add_exercise");
  });
};
