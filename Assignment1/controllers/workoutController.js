
let {workout} = require('../models/exerciseProgram');


module.exports.index = function(req, res){
    res.render('index',{title:'Exercise Web App'})
}

module.exports.workout = function(req, res){
    res.render('workouts',{title:'Workouts'})
}

module.exports.getWorkouts = function(req, res){
    
}