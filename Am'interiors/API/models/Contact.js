const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema ({
   
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
    
    soustitreFR: {
        type: String,
        required: true,
        unique: true
    },

    soustitreEN: {
        type: String,
        required: true,
        unique: true
    },

    servicesFR: {
        type: String,
        required: true,
        unique: true
    },

    servicesEN: {
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

module.exports = mongoose.model("Contact", contactSchema)
