import { useState, useEffect } from "react"
import ProgramForm from "./components/ProgramForm"

//components


function App() {

  const [programs, setPrograms] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/programs')
      const json = await response.json()
      setPrograms(json)
    }
    fetchWorkouts()
  },[])

  console.log(programs)

  return (
    <div className="w-screen h-screen bg-gray-200">
      {programs && programs.map((program) => (
        <h1 key={program._id}>{program.title}</h1>
      ))}
      <ProgramForm />
    </div>
  )
}

export default App
