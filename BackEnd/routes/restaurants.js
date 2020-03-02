const express = require('express')
const router = express.Router()

// const Model = require('../models/models')



router.get('/', (req, res) => {
    res.send('Hello World')
 })

// Get all 
// router.get('/', async (req, res) => {
//     try {
//         const model = await Model.find()
//         res.json(model)
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }

// });

module.exports = router

