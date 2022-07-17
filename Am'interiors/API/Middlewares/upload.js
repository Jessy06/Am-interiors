// Multer storage 'Uploads' 
const IMAGES_DIRECTORY = "Uploads"

const multer = require('multer');
 
const Storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, IMAGES_DIRECTORY)
    },
    
    filename: function (req, file, cb) {
      const randomName = Date.now() + '-' + file.originalname
      const extension = file.originalname.split('.').at(-1)
      cb(null, randomName + '.' + extension)
    }
    
});

const upload = multer({ storage: Storage });
 
module.exports = upload;
