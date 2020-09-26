let { Workout } = require("../models/schemas");

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
  res.render("workouts", {
    title: "Add Workout",
  });
};

// module.exports.getWorkout = function (userId, workOutId) {};
