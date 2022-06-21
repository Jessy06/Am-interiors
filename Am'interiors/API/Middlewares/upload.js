// Multer storage 'Uploads' 
const multer = require('multer');
 
const Storage = multer.diskStorage({
    destination: function (res, res, cb){
      cb(null, 'uploads')
    },
    
    filename: (req, file, cb) => {
      cb(null, Date.now() + " - " + file.originalname)
  }
});

const upload = multer({ storage: Storage });
 
module.exports = upload;
