const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const mongoose = require('mongoose');

//JSON WEB TOKEN AUTHENTICATION
const jwt = require ('jsonwebtoken');

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// IMPORT ROUTES
const authRoute = require('./routes/auth');

// ROUTES MIDDLEWARES
app.use('/api/user', authRoute);

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
{
useNewUrlParser : true,
}, () => console.log('Connected to MongoDB'));


// ROUTES
// app.get('/', async (req, res) => {
//     try {
//         const user = await User.find();
//         res.json(user);
//       } catch (err) {
//         res.json({ message: "Je n'arrive pas à avoir la data" });
//       }
// })


    // const accessToken = jwt.sign(User, process.env.TOKEN_SECRET)
    // res.json({accessToken : accessToken})

// PORT
app.listen(3001, console.log('Server Running'));