import { useParams } from "react-router-dom"

export default function ProgramDetails({programs}) {

  const { id } = useParams()

  const program = programs.find(program => program._id == id)
  return (
    <section>
      <h1>
        {program.title}
      </h1>
      <p>
        WORKOUT ID: {id}
      </p>
      <p>
        {program.description}
      </p>
      <div>
        {program.days.map(day => {
          return  <div key={day._id}>
                    {day.title}
                    {day.exercises.map(exercise => {
                      return <div key={exercise._id}>
                                {exercise.exercise}
                                {exercise.sets}
                                {exercise.reps}
                                {exercise.rest}
                             </div>
                    })}
                  </div>
                })}
      </div>
    </section>
    )
}