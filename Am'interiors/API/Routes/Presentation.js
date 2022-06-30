const express = require("express");

const router = express.Router();
const Presentation = require("../models/Presentation");
const verify = require("../Middlewares/verifytoken");
const { presentationValidation } = require("../Middlewares/validation");

// GET ALL presentations
router.get("/", verify, async (res) => {
  try {
    const presentations = await Presentation.find().sort({title: 'asc'});
    res.json(presentations);
  } catch (err) {
    res.status(400).send(err);
  };
})

// POST a new presentations
router.post('/new', async (req, res) => {
     // Validate data before we make a new projet
   const {error} = presentationValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new presentations
     const titleFR = req.body.titleFR;
     const titleEN = req.body.titleEN;
     const descriptionFR = req.body.descriptionFR;
     const descriptionEN = req.body.descriptionEN;
  
 
     const presentation = new Presentation({titleFR:titleFR,descriptionFR:descriptionFR,titleEN:titleEN, descriptionEN: descriptionEN, });
    
     try {
       await presentation.save ();
         res.send("New Theme Created !")
     } catch(err) {
         console.log(err);
     }
 });

 router.put("/:presentationId", verify, async (req, res) => {
  try {
    await Presentation.updateOne(
      { _id: req.params.presentationId },
      {
        $set: {
          titleFR: req.body.titleFR,
          descriptionFR: req.body.descriptionFR,
          titleEN: req.body.titleEN,
          descriptionEN: req.body.descriptionEN,
        },
      }
    );
    res.status(200).send({ message: "presentation correctly updated !" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE an presentation
router.delete("/:id", verify, async (req, res) => {
  try {
    await Presentation.deleteOne({_id: req.params.id} );
    res.status(200).send({ message: "presentation correctly deleted !" });
  } catch (err) {
    res.status(400).send(err);
  }
})

 module.exports = router;