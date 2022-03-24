const mongoose = require ('mongoose')

const AdminSchema = new mongoose.Schema ({
    adminname: { type: String, required:true},
    nom:{ type: String, required:true},
    prenom: { type: String, required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("Admin", AdminSchema);