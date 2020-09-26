var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/userController');
const workOutCtrl = require('../controllers/workoutController');

/* GET home page. */
router.get('/', workOutCtrl.index);

router.get('/workouts', workOutCtrl.workout);


module.exports = router;
