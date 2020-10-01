const {workoutProgramSchema, userSchema, exerciseSchema} = require("../models/schemas")
const mongoose = require("mongoose");
const User = mongoose.model("User", userSchema);
const Workout = mongoose.model("Workout", workoutProgramSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);


module.exports.addExercise = function (req, res) {
    const {user: userID} = req.session.passport;
    User.findById(userID, (err, user) =>
        res.render('add_exercise', {
            title: 'Add Exercise to Workout', workouts: user.workouts
        })
    );
}

// module.exports.getExercise = function(userId, workoutId, exerciseId){}

module.exports.createExercise = function (req, res) {
    const { user: userID } = req.session.passport;
    console.log("UserID: " + userID)
    User.findById(userID, (err, user) => {
        if (err)
            console.log(err);
        const WorkoutId = req.body.Workout
        console.log("Id: " + WorkoutId)
        let exercise = new Exercise();
        exercise.name = req.body.Exercise;
        exercise.description = req.body.Description;
        exercise.sets = req.body.Set;
        exercise.reps = req.body.Reps;
        const workout = user.workouts.id(WorkoutId)
        console.log("workout: " +workout)
        workout.exercises.push(exercise)
        console.log("exercises: " +workout.exercises)
        user.save();
        console.log("user :"+ user)
    })
    res.redirect("/workouts/" + req.body.Workout)
}

module.exports.getExercisesList = function (userId, workOutId) {
    getExercisesList(userId, workOutId)
}