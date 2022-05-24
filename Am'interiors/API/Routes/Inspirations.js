const express = require("express");

const router = express.Router();
const Inspiration = require("../models/Inspirations");
const { inspirationValidation } = require("../validation");

// GET ALL Projet
router.get("/", async (req, res) => {
  try {
    const inspirations = await Inspiration.find().sort({title: 'asc'});
    res.json(inspirations);
  } catch (err) {
    res.status(400).send(err);
  };
})

// Post a new Projet
router.post('/new', async (req, res) => {
     // Validate data before we make a new projet
   const {error} = inspirationValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new projet
     const title = req.body.title;
     const description = req.body.description;
     const lieu = req.body.lieu;
     const theme = req.body.theme;
 
     const inspiration = new Inspiration({title:title, description: description, lieu: lieu, theme: theme});
    
     try {
       await inspiration.save ();
         res.send("New Theme Created !")
     } catch(err) {
         console.log(err);
     }
 });

 module.exports = router;