import ProgramsCard from "../components/ProgramsCard"

export default function Home({programs}) {
    return (
        <section className="flex flex-col items-center justify-center">
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