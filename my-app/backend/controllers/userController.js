const User = require('../models/usersModel')

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