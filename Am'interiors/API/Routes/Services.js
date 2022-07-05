const express = require("express");

const router = express.Router();
const Presentation = require("../models/Services");
const verify = require("../Middlewares/verifytoken");
const { serviceValidation } = require("../Middlewares/validation");
const Service = require("../models/Services");

// GET ALL presentations
router.get("/", async (req, res) => {
  try {
    const service = await Service.find().sort({title: 'asc'});
    res.json(service);
  } catch (err) {
    res.status(400).send(err);
  };
})

// POST a new Service
router.post('/new', async (req, res) => {
     // Validate data before we make a new service
   const {error} = serviceValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new service
  
    const titleServiceFR = req.body.titleServiceEN; 
    const titleServiceEN = req.body.titleServiceEN;
    const descriptionServiceFR = req.body.descriptionServiceFR;
    const descriptionServiceEN = req.body.descriptionServiceEN;


     const service = new Service({ titleServiceFR:titleServiceFR, titleServiceEN:titleServiceEN, descriptionServiceFR:descriptionServiceFR, descriptionServiceEN:descriptionServiceEN, });
    
     try {
       await service.save ();
         res.send("New Service Created !")
     } catch(err) {
         console.log(err);
     }
 });

 router.put("/:serviceId", verify, async (req, res) => {
  try {
    await Service.updateOne(
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
    res.status(200).send({ message: "Service correctly updated !" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE an presentation
router.delete("/:id", verify, async (req, res) => {
  try {
    await Presentation.deleteOne({_id: req.params.id} );
    res.status(200).send({ message: "Service correctly deleted !" });
  } catch (err) {
    res.status(400).send(err);
  }
})

 module.exports = router;