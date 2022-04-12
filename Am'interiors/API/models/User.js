const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({
    Role:{
        type: String,
        default: "user"
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