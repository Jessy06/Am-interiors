const express = require("express");
const router = express.Router();

// TABLE SCHEMA REQUIRED
const User = require ("../models/User")

//VALIDATION
const { registerValidation } = require("../validation");

// CREATE (POST) REGISTER/NEW USER
router.post('/register', async (req, res) => {

    // Validate data befor we make a new user
   const {error} = registerValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
 
//    // Check if email is not in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send( "Email already exists !" );
  }



    // Create new user
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({Pseudo:pseudo, Password: password, Email:email});
   
    try {
      const saveduser =  await user.save ();
        res.send("New User Created")
    } catch(err) {
        console.log(err);
    }
});


module.exports = router;