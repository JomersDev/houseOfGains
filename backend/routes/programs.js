const express = require('express')
const { createProgram, getPrograms, deleteProgram } = require('../controllers/programController')

const router = express.Router()

// GET all workouts
router.get('/', getPrograms)

// POST a new workout
router.post('/', createProgram)

// DELETE a workout
router.delete('/:id', deleteProgram)

module.exports = router