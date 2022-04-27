const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({
   
    Pseudo: {
        type: String,
        require : true,
        unique: true 
    },

    Password: {
        type:String,
        require: true
    },

    Email: {
        type: String,
        require: true,
        unique: true
    },

     Role:{
        type: String,
        default: "user"
    },


});

module.exports = mongoose.model("User", UserSchema)
