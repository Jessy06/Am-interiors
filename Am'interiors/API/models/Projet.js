const mongoose = require ('mongoose');

const ProjetSchema = new mongoose.Schema ({
   
    title: {
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

    lieu: { 
        type: String,
        required: true
     },

    images: {
      type: [String]
    }
});

module.exports = mongoose.model("Projet", ProjetSchema)
