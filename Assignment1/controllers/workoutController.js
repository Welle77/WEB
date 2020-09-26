let {Exercise} =require("../models/schemas")
let {Workout} =require("../models/schemas")


module.exports.addWorkout = function (req, res) {
    res.render('add_workout',{
        title: 'Add Workout'})
};

module.exports.addExercise = function (req, res) {
    res.render('add_exercise', {
        title:'Add Exercise to Workout', 
});}
  
 module.exports.createWorkout = function (req, res) {
     const user = User.findById('5f69a14c6be1ac5a98acf8d7', async (err, user) => {
        if (err) console.log(err);
        let workout = new Workout();
        workout.name = req.body.workout_field;
        user.workouts.push(workout);
        await user.save();
        return user;
    });
    return user;
 };

// module.exports.getWorkoutList = function (req, res) {};

// module.exports.getWorkout = function (userId, workOutId) {};

// module.exports.getExercise = function(userId, workoutId, exerciseId){}

module.exports.createExercise = function(req, res){
    const user = User.findById('5f69a14c6be1ac5a98acf8d7', async (err, user) => {
        if (err) console.log(err);
        const workouts = user.workouts.id(workoutId);
        let exercise = new Exercise();
        exercise.name = req.body.Exercise;
        exercise.description = req.body.Description;
        exercise.set = req.body.Set;
        exercise.reps = req.body.Reps;    
        workouts.exercises.push(exercise);
        await user.save();
        return user;
      });

}

module.exports.getExercisesList = function(userId, workOutId){
    getExercisesList(userId,workOutId)
}