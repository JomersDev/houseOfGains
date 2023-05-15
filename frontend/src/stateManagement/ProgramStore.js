import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useProgramStore = create(
  persist(
    (set) => (
      {
        programs: [],
        fetchPrograms: async () => {
          fetch('http://localhost:4000/api/programs')
            .then(response => response.json())
            .then(data => set({programs: data}))
        }
      }
    ),
    {
      name: 'program-storage'
    }
  )
)