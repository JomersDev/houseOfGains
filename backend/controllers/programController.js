const Program = require('../models/programModel')
const mongoose = require('mongoose')

// GET all programs
const getPrograms = async (req, res) => {
    const programs = await Program.find({})
    res.status(200).json(programs)
}

// CREATE new program
const createProgram = async (req, res) => {
    const {title, description, days} = req.body

    // add doc to db
    try {
        const program = await Program.create({title, description, days})
        res.status(200).json(program)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout
const deleteProgram = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID type'})
    }

    const program = await Program.findOneAndDelete({_id: id})

    if (!program) {
        return res.status(404).json({error: 'No such program'})
    }

    res.status(200).json(program)
}

module.exports = {
    getPrograms,
    createProgram,
    deleteProgram
}