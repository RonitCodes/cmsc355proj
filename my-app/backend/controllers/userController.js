const User = require('../models/user')

const jwt= require('jsonwebtoken')
require("dotenv").config()


exports.signup = async (req, res) => {
    // check if user already exists
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email:req.body.email,
    });

    if (usernameExists) {
        return res.status(403).json({
            error: "Username is taken",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email is taken"
        });
    }
    // if new user, create user
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup Succesful! Please login!"
    })
 }

 exports.login = async (req, res) => {
    //find user on email
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        
        // err or not user
        if (!user ) {
            return res.status(401).json({
                error: "Invalid Credenials",
            });
        }

        //if found authenticate from model

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Invalid email or password",
            });
        }
        // generate token with user id and jwt secret

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        });


        const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        //generate token as jwt in cookie and expiration date
        res.cookie("jwt", token, { expires: expiryDate, httpOnly: true });
        
        // return response with user
        const { username } = user;

        return res.json({
            message: "Login Succesful",
            username,
        })
    } catch(error) {
        console.error("Login error: ", error);
        return res.status(500).json({
            error: "Internal Server Error"
        })
    };
}



// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createAt: -1})

    res.status(200).json(users)
}


// get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'No such User'})
    }

    res.status(200).json(user)
}


// create new user
const createUser = async (req, res) => {
    const {username, password, email, playlists} = req.body

    //sending to mongodb
    try {
        const user = await User.create({username, password, email, playlists})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete user


//update user


module.exports = {
    getUsers,
    getUser,
    createUser
}