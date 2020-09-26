var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/userController');
const workoutCtrl = require('../controllers/workoutController');
const exerciseCtrl = require('../controllers/exerciseController')

/* GET home page. */


router.get('/workouts/add', workoutCtrl.addWorkout);
// router.get('/workout/', workOutCtrl.getWorkout)
// router.get('/workouts/listAll', workOutCtrl.getWorkoutList)
router.post('/workouts/create', workoutCtrl.createWorkout)
router.get('/exercises/add', exerciseCtrl.addExercise)
// router.get('/exercise/', workOutCtrl.getExercise)
router.post('/exercises/create', exerciseCtrl.createExercise)
// router.get('/exercise/listAll', workOutCtrl.getExercisesList)


module.exports = router;
