require('dotenv').config()


const cors = require("cors");
const express = require('express')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose')

// express app
const app = express();

//middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
const expressValidator = require("express-validator");

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// routes
app.use('/api/users', userRoutes)

//connecting to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
//listening for server
        app.listen(process.env.PORT, () => {
        console.log('connected to db listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })



