const express = require("express");

const router = express.Router();
const Inspiration = require("../models/Inspirations");
const verify = require("../Middlewares/verifytoken");
const { inspirationValidation } = require("../Middlewares/validation");

// GET ALL Inspirations
router.get("/", async (req, res) => {
  try {
    const inspirations = await Inspiration.find().sort({title: 'asc'});
    res.json(inspirations);
  } catch (err) {
    res.status(400).send(err);
  };
})

// POST a new Inspirations
router.post('/new', async (req, res) => {
     // Validate data before we make a new projet
   const {error} = inspirationValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new inspirations
     const title = req.body.title;
     const descriptionFR = req.body.descriptionFR;
     const descriptionEN = req.body.descriptionEN;
     const lieu = req.body.lieu;
     const theme = req.body.theme;
 
     const inspiration = new Inspiration({title:title, descriptionFR: descriptionFR, descriptionEN: descriptionEN,lieu: lieu, theme: theme});
    
     try {
       await inspiration.save ();
         res.send("New inspiration Created !")
     } catch(err) {
         console.log(err);
     }
 });

 router.put("/:inspirationId", verify, async (req, res) => {
  try {
    await Inspiration.updateOne(
      { _id: req.params.inspirationId },
      {
        $set: {
          title: req.body.title,
          descriptionFR: req.body.descriptionFR,
          descriptionEN: req.body.descriptionEN,
          lieu: req.body.lieu,
          theme:req.body.theme
        },
      }
    );
    res.status(200).send({ message: "Inspiration correctly updated !" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE an Inspiration
router.delete("/:id", verify, async (req, res) => {
  try {
    await Inspiration.deleteOne({_id: req.params.id} );
    res.status(200).send({ message: "Inspiration correctly deleted !" });
  } catch (err) {
    res.status(400).send(err);
  }
})

 module.exports = router;