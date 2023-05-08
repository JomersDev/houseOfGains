const mongoose = require('mongoose')

const { Schema } = mongoose

const exerciseSchema = mongoose.Schema({
  exercise: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  rest: { type: String, required: true }
});

const daySchema = mongoose.Schema({
  title: { type: String, required: true },
  exercises: [exerciseSchema]
});

const programSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Program', programSchema);

/* Example Workout Program Data structure  

{
	title: "Push Pull Legs",
	description: "A beginner 6 day workout routine for push pull legs with 6 unique workouts"
	days: [{
			title: Push A,
			exercises: [{
				  exercise: "Bench Press",
					sets: 5,
					reps: 5
					rest: "2 mins"
				},
				{
					exercise: "Overhead Press",
					sets: 4,
					reps: 12
					rest: "1.5 mins"
				},
				{
					exercise: "Lateral Raise",
					sets: 4,
					reps: 12
					rest: "1.5 mins"
				}
			]
		},
		{
			title: Pull A,
			exercises: [{
					exercise: "Barbell Row",
					sets: 5,
					reps: 5
					rest: "2 mins"
				},
				{
					exercise: "Lat Pulldown",
					sets: 4,
					reps: 12
					rest: "1.5 mins"
				},
				{
					exercise: "Dumbbell Curls",
					sets: 4,
					reps: 12
					rest: "1.5 mins"
				}
			]
		}
	]
}

*/