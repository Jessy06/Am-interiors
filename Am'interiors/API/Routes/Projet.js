const express = require("express");

const router = express.Router();
const Projet = require("../models/Projet");
// const User = require("../models/User");
const verify = require("./verifytoken");
const { projetValidation } = require("../validation");

// GET ALL Projet
router.get("/", async (req, res) => {
  try {
    const projets = await Projet.find().sort({title: 'asc'});
    res.json(projets);
  } catch (err) {
    res.status(400).send(err);
  };
})

// POST a new Projet
router.post('/new', verify , async (req, res) => {
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


 // UPDATE
router.put("/:projetId", verify, async (req, res) => {
  try {
    await Projet.updateOne(
      { _id: req.params.projetId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          lieu: req.body.lieu
        },
      }
    );
    res.status(200).send({ message: "Projet correctly updated !" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a Projet

router.delete("/:id", verify, async (req, res) => {
  try {
    await Projet.deleteOne({_id: req.params.id} );
    res.status(200).send({ message: "Projet correctly deleted !" });
  } catch (err) {
    res.status(400).send(err);
  }
})

 module.exports = router;