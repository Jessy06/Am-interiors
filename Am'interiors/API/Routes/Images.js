const express = require("express");
const router = express.Router();
const Images = require('../models/Images')
const verify = require('./verifytoken')
const { imagesValidation } = require ("../validation");

// Multer storage 'Uploads' 
const multer = require('multer');
const imgModel = require ("../models/Images")
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
const upload = multer({ storage: storage });

// GET ALL Images
router.get("/", verify, async (req, res) => {
  try {
    const images = await Images.find().sort({title: 'asc'});
    res.json(images);
  } catch (err) {
    res.status(400).send(err);
  };
})


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