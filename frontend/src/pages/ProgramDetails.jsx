import { useParams, useNavigate } from "react-router-dom"
import { useProgramStore } from "../stateManagement/ProgramStore"

export default function ProgramDetails() {
  
  const navigate = useNavigate()
  const { id } = useParams()

  // zustand state management stateManagement/ProgramStore.js
  const programs = useProgramStore(state => state.programs)

  // find workout program with id matching id in url parameters
  const program = programs.find(program => program._id == id)

  return (
    <section className="p-4 mx-8 my-8 bg-white rounded-xl">
      <button className="px-2 text-sm text-purple-700 bg-purple-100" onClick={() => navigate('/')}>
        Back
      </button>
      <h1 className="mt-2 text-2xl font-semibold text-purple-500">
        {program.title}
      </h1>
      <p className="mt-6">
        {program.description}
      </p>
      <div className="flex flex-col mt-8 rounded-md gap-y-8">
        {program.days.map(day => {
          return  <div key={day._id} className="p-2 pb-8 rounded-md shadow-md bg-slate-50">
                    <h2 className="text-2xl font-semibold text-red-500">
                      {day.title}
                    </h2>
                    <div className="flex flex-col mt-4 gap-y-4">
                      {day.exercises.map(exercise => {
                        return <div key={exercise._id} className="px-4 py-2 bg-white shadow-sm rounded-xl">
                                  <p className="font-semibold">
                                    {exercise.exercise}
                                  </p>
                                  <p className="text-sm">
                                    Sets: {exercise.sets}
                                  </p>
                                  <p className="text-sm">
                                    Reps: {exercise.reps}
                                  </p>
                                  <p className="text-sm">
                                    Rest: {exercise.rest}
                                  </p>
                                  {exercise.notes && 
                                    <p className="mt-2 text-xs text-gray-500">
                                      {exercise.notes}
                                    </p>
                                  }
                              </div>
                      })}
                    </div>
                  </div>
                })}
      </div>
    </section>
    )
}