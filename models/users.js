const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbUsers = new Schema({
    googleId: { type: String },
    name: {type: String, required: true },
    // picture: {type: String, required: true },
    email: {type: String, required: true },
    familyName: {type: String },
    givenNAme: {type: String },
    location: {type: String },
    profileDescription: {type: String},
    imageUrl: {type: String },
   

   
});

const User = mongoose.model("User", dbUsers);

module.exports = User; 