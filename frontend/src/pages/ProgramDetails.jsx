import { useParams } from "react-router-dom"
import { useProgramStore } from "../stateManagement/ProgramStore"

export default function ProgramDetails() {
  
  const { id } = useParams()

  // zustand state management stateManagement/ProgramStore.js
  const programs = useProgramStore(state => state.programs)

  // find workout program with id matching id in url parameters
  const program = programs.find(program => program._id == id)

  console.log(program)

  return (
    <section>
      <h1>
        {program.title}
      </h1>
      <p>
        WORKOUT ID: {id}
      </p>
        {program.description}
      <p>
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