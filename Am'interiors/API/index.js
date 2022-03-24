const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');


const AdminModel = require("./models/Admin");
app.use(express.json());


// CONNECT TO DB
mongoose.connect("mongodb+srv://Jessy06:JessyJesse06@cluster0.ppxrt.mongodb.net/Aminteriors?retryWrites=true&w=majority",
{
useNewUrlParser : true,
}
);



// ROUTES
app.get('/', async (req, res) => {
    const user = new AdminModel ({adminname: 'Joshua', nom: 'Delavigne', prenom: 'Joshua', email: 'joshuadel15@gmail.com', password:'123456789'})

    try {
        await Admin.save ();
        res.send("Data inserted")
    } catch(err) {
        console.log(err);
    }
});

// PORT
app.listen(3030);