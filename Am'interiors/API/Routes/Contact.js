const express = require("express");

const router = express.Router();
const Presentation = require("../models/Contact");
const verify = require("../Middlewares/verifytoken");
const { contactValidation } = require("../Middlewares/validation");
const Contact = require("../models/Contact");

// GET ALL presentations
router.get("/", verify, async (req, res) => {
  try {
    const contact = await Contact.find().sort({title: 'asc'});
    res.json(contact);
  } catch (err) {
    res.status(400).send(err);
  };
})

// POST a new Contact
router.post('/new', async (req, res) => {
     // Validate data before we make a new projet
   const {error} = contactValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new contact
     const titleFR = req.body.titleFR;
     const titleEN = req.body.titleEN;
     const soustitreFR = req.body.soustitreFR;
     const soustitreEN = req.body.soustitreEN;
     const servicesFR = req.body.ServicesEN; 
     const servicesEN = req.body.ServicesEN;
    const descriptionServiceFR = req.body.descriptionServiceFR;
    const descriptionServiceEN = req.body.descriptionServiceEN;
  
 
     const contact = new Contact({titleFR:titleFR,soustitreFR:soustitreFR,titleEN:titleEN, soustitreEN:soustitreEN, servicesFR:servicesFR, servicesEN:servicesEN, descriptionServiceFR:descriptionServiceFR, descriptionServiceEN:descriptionServiceEN, });
    
     try {
       await contact.save ();
         res.send("New contact Created !")
     } catch(err) {
         console.log(err);
     }
 });

 router.put("/:contactId", verify, async (req, res) => {
  try {
    await Presentation.updateOne(
      { _id: req.params.contactId },
      {
        $set: {
            titleFR :req.body.titleFR,
            titleEN : req.body.titleEN,
            soustitreFR : req.body.soustitreFR,
             soustitreEN : req.body.soustitreEN,
            servicesFR :req.body.ServicesFR, 
             servicesEN : req.body.ServicesEN,
           descriptionServiceFR : req.body.descriptionServiceFR,
           descriptionServiceEN : req.body.descriptionServiceEN,
        },
      }
    );
    res.status(200).send({ message: "Contact correctly updated !" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE an presentation
router.delete("/:id", verify, async (req, res) => {
  try {
    await Presentation.deleteOne({_id: req.params.id} );
    res.status(200).send({ message: "Contact correctly deleted !" });
  } catch (err) {
    res.status(400).send(err);
  }
})

 module.exports = router;