const mongoose = require ('mongoose');

const InspirationSchema = new mongoose.Schema ({
   
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

    theme: {
        type: String,
        required: true
    }

    
    
});

module.exports = mongoose.model("Inspiration", InspirationSchema)
