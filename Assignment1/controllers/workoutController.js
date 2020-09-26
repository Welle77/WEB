module.exports.workout = function (req, res) {
  console.log(req);

  res.render("workouts", { title: "Workouts" });
};

module.exports.getWorkouts = function (req, res) {};
