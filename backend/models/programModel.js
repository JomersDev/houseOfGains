const mongoose = require('mongoose')

const { Schema } = mongoose

const programSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  days: [
	{
    title: String,
    exercises: [
      {
        exercise: String,
        sets: String,
        reps: String, 
        rest: String  
      }
    ]
	}
]
})

module.exports = mongoose.model('Program', programSchema);
