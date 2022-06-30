const mongoose = require ('mongoose');

const presentationSchema = new mongoose.Schema ({
   
    titleFR: {
        type: String,
        required : true,
        unique: true 
    },
    titleEN: {
        type: String,
        required : true,
        unique: true 
    },

    descriptionFR: {
        type: String,
        required: true,
        unique: true
    },

    descriptionEN: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model("Presentation", presentationSchema)
