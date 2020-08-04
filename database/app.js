const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  category: String,
  equipment: String,
  demo: String,
  sets: Number,
  reps: Number,
  suggestion: Boolean
})

const Exercise = mongoose.model('Exercises', exerciseSchema)

module.exports = Exercise;