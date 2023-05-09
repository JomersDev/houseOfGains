import { useState, useEffect } from "react"

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
    <div className="bg-gray-200 w-screen h-screen">
      {programs && programs.map((program) => (
        <h1 key={program._id}>{program.title}</h1>
      ))}
    </div>
  )
}

export default App
