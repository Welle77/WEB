const {
  createWorkout,
  getWorkout,
  getWorkoutList,
} = require("../models/workout");

module.exports.workout = function (req, res) {
  res.render("workouts", { title: "Workouts" });
};

module.exports.createWorkout = function (req, res) {
  createWorkout(req.id, req.Workout);
};

module.exports.getWorkoutList = function (req, res) {
  getWorkoutList(req.id);
};
module.exports.getWorkout = function (userId, workOutId) {
  getWorkout(userId, workOutId);
};
