const express = require('express')
const {
    createUser,
    getUser,
    getUsers
} = require('../controllers/userController')

const User = require('../models/user')
const {verifyToken} = require("../middlewares/auth")

const { 
    signup, 
    login, 
    logout,
    getLoggedInUser,
} = require("../controllers/userController");
const { userRegisterValidator, userById } = require("../middlewares/user")



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
router.post('/', createUser)

//DELETE a user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user'})
})

//UPDATA a user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATA a user'})
})



router.post("/signup", async (req, res) => {
    try {
        await signup(req, res); // Call the register controller function
    } catch (error) {
        console.error("Error occurred during registration:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//api routes
 
//router.post("/", login)
//router.get("/logout", logout)
//router.get("/user", verifyToken, userById, getLoggedInUser);
 

module.exports = router