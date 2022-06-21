const express = require("express");
const router = express.Router();
const Images = require('../models/Images')
const verify = require('../Middlewares/verifytoken')
const { imagesValidation } = require ("../Middlewares/validation");

// Multer storage 'Uploads' 
const multer = require('multer');
 
const Storage = multer.diskStorage({
    destination:'uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname)
  }
});
 
const upload = multer({ storage: Storage }).array('UploadImage', 10);

// GET ALL Images
router.get("/", verify, async (req, res) => {
  try {
    const images = await Images.find().sort({title: 'asc'});
    res.json(images);
  } catch (err) {
    res.status(400).send(err);
  };
});

// POST a uploaded image
router.post('/upload', verify , async (req, res) => {
  // Validate data before we upload a new image
  const {error} = imagesValidation(req.body);
if (error) return res.status(400).send({message:error.details[0].message} );
  
upload(req, res, (err) => {
  if (err) {
    console.log(err)
  }
  else {
// Upload new image
const projet = req.body.projet;
const title = req.body.title;
const descriptionFR = req.body.descriptionFR;
const descriptionEN = req.body.descriptionEN;
const img = {
  data: req.files.filename,
  contentType:'image/png'
}

const image = new Images(
  {projet:projet,
  title:title,
  descriptionFR: descriptionFR,
  descriptionEN: descriptionEN,
  img: img});

  image.save()
  .then(() => res.send("Successfuly uploaded"))
  .catch((err) => console.log(err));
// try {
//   await image.save ();
//     res.send("New image Uploaded !")
// } catch(err) {
//     console.log(err);
// }
  }
}

)});


//  router.put("/:inspirationId", verify, async (req, res) => {
//   try {
//     await Inspiration.updateOne(
//       { _id: req.params.inspirationId },
//       {
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//           lieu: req.body.lieu,
//           theme:req.body.theme
//         },
//       }
//     );
//     res.status(200).send({ message: "Image correctly uploaded !" });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // DELETE an Inspiration
// router.delete("/:id", verify, async (req, res) => {
//   try {
//     await Inspiration.deleteOne({_id: req.params.id} );
//     res.status(200).send({ message: "Inspiration correctly deleted !" });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// })

 module.exports = router;