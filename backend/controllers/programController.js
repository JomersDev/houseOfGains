const Program = require('../models/programModel')
const mongoose = require('mongoose')

// GET all programs
const getPrograms = async (req, res) => {
    const programs = await Program.find({})
    res.status(200).json(programs)
}

// CREATE new program
const createProgram = async (req, res) => {
    const {title, description} = req.body

    // add doc to db
    try {
        const program = await Program.create({title, description})
        res.status(200).json(program)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getPrograms,
    createProgram,
}