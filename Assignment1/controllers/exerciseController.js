let {Exercise} =require("../models/schemas")
const { userSchema } = require("../models/schemas");
const mongoose = require("mongoose");
const User = mongoose.model("User", userSchema);

module.exports.addExercise = function (req, res) {
    const { user: userID } = req.session.passport;
  User.findById(userID, (err, user) => 
    res.render('add_exercise', {
        title:'Add Exercise to Workout', workouts: user.workouts
    })
  );}
  
// module.exports.getExercise = function(userId, workoutId, exerciseId){}

module.exports.createExercise = function(req, res){
    const { user: userID } = req.session.passport; {
        User.findById(userID, (err, user) => {
        if (err) console.log(err);
        const workouts = user.workouts.id(workoutId);
        let exercise = new Exercise();
        exercise.name = req.body.Exercise;
        exercise.description = req.body.Description;
        exercise.set = req.body.Set;
        exercise.reps = req.body.Reps;  
    })
}
}

module.exports.getExercisesList = function(userId, workOutId){
    getExercisesList(userId,workOutId)
}