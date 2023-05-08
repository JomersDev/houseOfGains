const express = require('express')
const { createProgram, getPrograms } = require('../controllers/programController')

const router = express.Router()

// GET all workouts
router.get('/', getPrograms)

// POST a new workout
router.post('/', createProgram)

module.exports = router