// TABLE SCHEMA REQUIRED
const UserModel = require ("./models/User")

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

    
}