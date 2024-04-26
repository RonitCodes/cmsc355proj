const express = require('express')

const router = express.Router()

//GET all users
router.get('/', (req, res) => {
    res.json({mssg: 'GET all users'})
})

//GET single user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'})
})

//POST a new user
router.post('/', (req, res) => {
    
    res.json({mssg: 'POST new user'})
})

//DELETE a user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user'})
})

//UPDATA a user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATA a user'})
})

module.exports = router