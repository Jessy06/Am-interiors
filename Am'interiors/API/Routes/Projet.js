const express = require("express");

const router = express.Router();
const Projet = require("../models/Projet");
// const User = require("../models/User");
// const verify = require("./verifytoken");
const { projetValidation } = require("../validation");

// Post a new Projet
router.post('/new', async (req, res) => {
     // Validate data before we make a new projet
   const {error} = projetValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new projet
     const title = req.body.title;
     const description = req.body.description;
    //  const date = req.body.date;
     const lieu = req.body.lieu;
 
     const projet = new Projet({title:title, description: description, lieu: lieu});
    
     try {
       await projet.save ();
         res.send("New Projet Created !")
     } catch(err) {
         console.log(err);
     }
 });

 module.exports = router;