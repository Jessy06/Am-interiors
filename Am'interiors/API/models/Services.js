const mongoose = require ('mongoose');

const serviceSchema = new mongoose.Schema ({
   
    titleServiceFR: {
        type: String,
        required: true,
        unique: true
    },

    titleServiceEN: {
        type: String,
        required: true,
        unique: true
    },

    descriptionServiceFR: {
        type: String,
        required: true,
        unique: true
    },

    descriptionServiceEN: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model("Service", serviceSchema)
