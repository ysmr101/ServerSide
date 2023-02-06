const mongoose = require("mongoose");

const userSchema= mongoose.Schema({

    fName: {type: String, required: true},
    lName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    password: {type: Number, required: true},
    
});

const user = mongoose.model("User", userSchema,'users');

module.exports = user