const mongoose = require("mongoose");
const {exerciseSchema, userSchema} = require("./schemas");
const workout = require("./workout");

const User = mongoose.model("User", userSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (userId, workoutId, exercise) => {
    const user = User.findById(userId, async (err, user) => {
        if (err) console.log(err);
        const workouts = user.workouts.id(workoutId);
        workouts.exercises.push(new Exercise(exercise));
        await user.save();
        return user;
    });

    return user;
};

const getExercise = async (userId, workoutId, exerciseId) => {
    return User.findById(userId, (err, user) => {
        if (err) console.log(err);

        const workouts = user.workouts.id(workoutId);

        return new Exercise("Test", "hej", 30, 30, 30)

        // return workouts.exercises.id(exerciseId);
    });
};

const getExercisesList = async (userId, workoutId) => {
    const user = await User.findById(userId, (err) => {
        if (err) console.log(err);
    });

    const workouts = user.workouts.id(workoutId);

    return workouts.exercises;
};

module.exports = {createExercise, getExercise, getExercisesList};
