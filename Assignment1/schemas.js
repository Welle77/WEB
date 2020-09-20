var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const workoutProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  sets: Number,
  reps: Number,
  time: Number,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  name: {
    type: String,
    required: true,
  },
  workouts: [workoutProgramSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = { userSchema, workoutProgramSchema };
