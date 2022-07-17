const express = require("express");

const router = express.Router();
const Projet = require("../models/Projet");
// const User = require("../models/User");
const verify = require("../Middlewares/verifytoken");
const { projetValidation } = require("../Middlewares/validation");
const upload = require("../Middlewares/upload");

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
router.post('/new', verify, async (req, res) => {
     // Validate data before we make a new projet
   const {error} = projetValidation(req.body);
   if (error) return res.status(400).send({message:error.details[0].message} );
     
   // Create new projet
     const title = req.body.title;
     const descriptionFR = req.body.descriptionFR;
     const descriptionEN = req.body.descriptionEN;
     const lieu = req.body.lieu;
     const images = [];
 
     const projet = new Projet(
      {title:title, 
      descriptionFR: descriptionFR,
      descriptionEN: descriptionEN,
      lieu: lieu,
      images: images
    });
    
     try {
       await projet.save ();
         res.send("New Projet Created !")
     } catch(err) {
         console.log(err);
     }
 });

 // Insert Image in project

 router.post('/:id/images',verify, upload.array('images'), async function(req, res) {
  try{
      const projet = await Projet.findById(req.params.id)
      if(!projet){
          res.code(404).send("Project does not exists")
      }
      const images = req.files.map(image=>image.filename)
      projet.images.push(...images)
      await projet.save()
      res.send(projet)    
  } catch(err) {
      res.send('Image(s) not inserted !')
  }
})
  
 // UPDATE
router.put('/:id', async (req,res)=>{
  try{

      const id = req.params.id
      const projet = await Projet.findById(id)

      if(!projet) {
          res.code(404).send('Can\'t find projet')
          return
      }

      const properties = ["title", "descriptionEN", "descriptionFR", "lieu"]
      for(const property of properties){
          if(req.body.hasOwnProperty(property)){
              projet[property] = req.body[property]
          }
      }

      await projet.save()
      res.send(projet)

  }catch(err){
      res.code(500).send('Couldn\'t modify projet')
  }
})

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