const mongoose = require ('mongoose');

const ImageSchema = new mongoose.Schema({

    id_projet: {
        type: String,
        required: true
    },

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

    img: {
        data : Buffer,
        contentType: String
    }


    });

    module.exports = mongoose.model("Images", ImageSchema);