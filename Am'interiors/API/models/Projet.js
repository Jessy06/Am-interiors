const mongoose = require ('mongoose');

const ProjetSchema = new mongoose.Schema ({
   
    title: {
        type: String,
        required : true,
        unique: true 
    },

    description: {
        type: String,
        required: true,
        unique: true
    },

    // date: {
    //     type: Date,
    //     required: true
    // },
    
    lieu: { 
        type: String,
        required: true
     },

    
    
});

module.exports = mongoose.model("Projet", ProjetSchema)
