const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

// TABLE SCHEMA REQUIRED
const UserModel = require ("./models/User")
app.use(express.json());


// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
{
useNewUrlParser : true,
} );


// ROUTES
app.get('/', async (req, res) => {
    const User = new UserModel({Admin:"false", Pseudo: "Test", Password: "Testpassword1234", Email:"Test@user.com"});
   
    try {
        await User.save ();
        res.send("Data inserted")
    } catch(err) {
        console.log(err);
    }
});

// PORT
app.listen(3030);