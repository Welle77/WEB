const mongoose = require("mongoose");
const { workoutProgramSchema, userSchema } = require("../schemas");

const User = mongoose.model("User", userSchema);
const Workout = mongoose.model("Workout", workoutProgramSchema);

const createWorkout = async (userId, workout) => {
  return User.findById(userId, async (err, user) => {
    if (err) console.log(err);
    const workoutToAdd = new Workout(workout);
    user.workouts.push(workoutToAdd);
    await user.save();
  });
};

const getWorkout = async (userId, workoutId) => {
  const user = await User.findById(userId, (err, user) => {
    if (err) console.log(err);
  });

  return user.workouts.id(workoutId);
};

const getWorkoutList = async (userId) => {
  const user = await User.findById(userId, (err) => {
    if (err) console.log(err);
  });

  return user.workouts;
};

module.exports = { createWorkout, getWorkout, getWorkoutList };
