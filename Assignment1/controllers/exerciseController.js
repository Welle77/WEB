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
    const {user: userID} = req.session.passport;
    console.log("UserID: " + userID)
    User.findById(userID, (err, user) => {
        if (err)
            console.log(err);
        const WorkoutId = req.body.Workout
        console.log("Id: "+WorkoutId)
        Workout.findById(WorkoutId, (err, workout) => {
            console.log(workout)
            if (err)
                console.log(err);
            let exercise = new Exercise();
            exercise.name = req.body.Exercise;
            exercise.description = req.body.Description;
            exercise.set = req.body.Set;
            exercise.reps = req.body.Reps;
            workout.exercises.push(exercise)
            user.workouts.save();
        })
    })
    res.redirect("/workouts/" + req.body.Workout)
}

module.exports.getExercisesList = function (userId, workOutId) {
    getExercisesList(userId, workOutId)
}