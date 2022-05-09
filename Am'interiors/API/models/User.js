const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({
   
    pseudo: {
        type: String,
        required : true,
        unique: true 
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    
    token: { 
        type: String },


    admin:{
        type: Boolean,
        default: "false"
    },
    
    
});

module.exports = mongoose.model("User", UserSchema)
