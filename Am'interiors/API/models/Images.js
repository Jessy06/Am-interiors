const mongoose = require ('mongoose');

const ImageSchema = new mongoose.Schema({

    projet: {
        type: String,
        required: true
    },

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

    img: {
        data : Buffer,
        contentType: String
    }
    });

    module.exports = mongoose.model("Images", ImageSchema);