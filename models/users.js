const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true },
    email: {type: String, required: true },
    location: {type: String, required: true },
    description: {type: String, required: true },
    facebookId: {type: String },
    googleId: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User; 