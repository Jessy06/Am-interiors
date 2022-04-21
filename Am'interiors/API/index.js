const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const mongoose = require('mongoose');

//JSON WEB TOKEN AUTHENTICATION
const jwt = require ('jsonwebtoken');

app.use(express.json());
app.use(cors());

// TABLE SCHEMA REQUIRED
const UserModel = require ("./models/User")


// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
{
useNewUrlParser : true,
}, () => console.log('connected to db'));


// ROUTES

app.post('/newuser', async (req, res) => {
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;

    const User = new UserModel({Pseudo:pseudo, Password: password, Email:email});
   
    try {
        await User.save ();
        res.send("Data inserted")
    } catch(err) {
        console.log(err);
    }

    const accessToken = jwt.sign(User, process.env.TOKEN_SECRET)
    res.json({accessToken : accessToken})
});

// PORT
app.listen(3001);