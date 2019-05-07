const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbUsers = new Schema({
    username: {type: String, required: true },
    picture: {type: String, required: true },
    email: {type: String, required: true },
    location: {type: String, required: true },
    profileDescription: {type: String, required: true },
    image: {type: String },
    // facebookId: {type: String },
    googleId: { type: String }
});

const User = mongoose.model("User", dbUsers);

module.exports = User; 