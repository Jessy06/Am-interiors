const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


// TABLE SCHEMA REQUIRED
const User = require ("../models/User")

//VALIDATION
const { registerValidation, loginValidation } = require("../validation");

// CREATE (POST) REGISTER/NEW USER
router.post('/register', async (req, res) => {

    // Validate data before we make a new user
   const {error} = registerValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
 
  //  // Check if email is not in the database
   const emailExist = await User.findOne({ email: req.body.email });
   if (emailExist) {
     return res.status(400).send({ message: "Email already exists !" });
   }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = hashpassword;

    const user = new User({pseudo:pseudo, email: email, password: password});
   
    try {
      await user.save ();
        res.send("New User Created !")
    } catch(err) {
        console.log(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
  
    const user = await User.findOne({ pseudo: req.body.pseudo });
    if (!user) return res.status(400).send({ message: "Pseudo is not found" });
  
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) 
      return res.status(400).send("Invalid password !")
      res.send("You are logged in !");
      
    

    // const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);  
});


module.exports = router;