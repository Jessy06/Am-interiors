const express = require("express");
const router = express.Router();
const jwt = require ('jsonwebtoken')
const bcrypt = require("bcryptjs");


// TABLE SCHEMA REQUIRED
const User = require ("../models/User")

//VALIDATION
const { registerValidation, loginValidation } = require("../validation");
const { verify } = require("jsonwebtoken");

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
      
    // CREATE AND ASSIGN TOKEN  
    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET, {expiresIn: "10 min"});
    
  if (user.admin === true) {
    res.cookie("token", token, { httpOnly: true }).send({
      token,
      message: "Admin logged !",
      Id: user._id,
      pseudo: user.pseudo,
      admin: user.admin,
      role: "Administrator"
    });
    
  } else {
    return res.status(401).json({error:"Access refused : Only the administrator can login !", message:"Access refused !"})
  };
});


module.exports = router;