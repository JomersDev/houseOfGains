import ProgramsCard from "../components/ProgramsCard"
import { useProgramStore } from "../stateManagement/ProgramStore"

export default function Home() {

  const programs = useProgramStore(state => state.programs)

  return (
    <section className="flex flex-col items-center h-screen mt-8 bg-gray-200">
      <h1 className="mb-4 text-3xl font-bold text-purple-500">
        All Workouts
      </h1>
      <div className="flex flex-col gap-y-6">
        {programs.map(program => {
          return <ProgramsCard key={program._id} title={program.title} id={program._id}/>
        })}
      </div>
    </section>
  )
}

//<ProgramCard key={program._id} title={program.title}/>