const express = require('express');
const app = express();
const mongoose = require('mongoose');


const UserModel = require ("./models/User")

app.use(express.json());


// CONNECT TO DB
mongoose.connect("mongodb+srv://Jessy06:JessyJesse06@cluster0.ppxrt.mongodb.net/Aminteriors?retryWrites=true&w=majority",
{
useNewUrlParser : true,
} );


// ROUTES
app.get('/', async (req, res) => {
    const User = new UserModel({Admin:"false", Pseudo: "user", Password: "userpassword1234", Email:"user@user.com"});
   
    try {
        await User.save ();
        res.send("Data inserted")
    } catch(err) {
        console.log(err);
    }
});

// PORT
app.listen(3030);