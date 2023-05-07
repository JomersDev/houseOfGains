const mongoose = require('mongoose')

const { Schema } = mongoose

const programSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Program', programSchema);

/* 
{
  title: "Push Pull Legs",
  description: "A beginner 6 day workout routine for push pull legs with 6 unique workouts"
  days: [
    {
      title: Push A,
      exercises: [
        {
          title: "Bench Press",
          sets: 5,
          reps: 5
          rest: "2 mins"
        },
        {
          title: "Overhead Press",
          sets: 4,
          reps: 12
          rest: "1.5 mins"
        },
      ]
    },
      {
      title: Push A,
      exercises: [
        {
          title: "Bench Press",
          sets: 5,
          reps: 5
          rest: "2 mins"
        },
        {
          title: "Overhead Press",
          sets: 4,
          reps: 12
          rest: "1.5 mins"
        },
      ]
    }
  ]
}

*/