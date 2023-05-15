import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { useProgramStore } from "./stateManagement/ProgramStore"

// components & pages
import Home from "./pages/Home"
import ProgramDetails from "./pages/ProgramDetails"
import CreateProgram from "./pages/CreateProgram"


function App() {
  
  // zustand state management stateManagement/ProgramStore.js
  const getPrograms = useProgramStore(state => state.fetchPrograms)
  const programs = useProgramStore(state => state.programs)

  useEffect(() => {
    getPrograms()
  },[getPrograms])

  console.log(programs)

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProgramDetails />} />
        <Route path="/create" element={<CreateProgram />} />
      </Routes>
    </div>
  )
}

export default App
