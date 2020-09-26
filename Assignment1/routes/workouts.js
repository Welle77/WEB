var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/userController');
const workoutCtrl = require('../controllers/workoutController');

/* GET home page. */


router.get('/workouts/add/workout', workoutCtrl.addWorkout);
// router.get('/workout/', workOutCtrl.getWorkout)
// router.get('/workouts/listAll', workOutCtrl.getWorkoutList)
router.post('/workouts/create/workout', workoutCtrl.createWorkout)
router.get('/workouts/add/exercise/', workoutCtrl.addExercise)
// router.get('/exercise/', workOutCtrl.getExercise)
router.post('/workouts/create/exercise', workoutCtrl.createExercise)
// router.get('/exercise/listAll', workOutCtrl.getExercisesList)


module.exports = router;
