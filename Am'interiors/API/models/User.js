const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({
    Admin:{
        type: Boolean,
        default: true
    },

    Pseudo: {
        type: String,
        require : true 
    },

    Password: {
        type:String,
        require: true
    },

    Email: {
        type: String,
        require: true
    }

});

const User = mongoose.model("User", UserSchema)
module.exports = User;