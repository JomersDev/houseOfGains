import { useState, useEffect } from "react"
import ProgramForm from "./components/ProgramForm"
import { Routes, Route } from 'react-router-dom'

// components & pages
import Home from "./pages/Home"
import ProgramDetails from "./pages/ProgramDetails"

function App() {

  const [programs, setPrograms] = useState([])

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
      <Routes>
        <Route path="/" element={<Home programs={programs}/>} />
        <Route path="/:id" element={<ProgramDetails programs={programs}/>} />
      </Routes>
    </div>
  )
}

export default App
