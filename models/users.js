const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: { type: String },
    name: {type: String, required: true },
    imageUrl: {type: String },
    url: {data: Buffer, contentType: String  },
    email: {type: String, required: true },
    familyName: {type: String },
    givenNAme: {type: String },
    location: {type: String },
    profileDescription: {type: String},
});

const User = mongoose.model("User", userSchema);

module.exports = User; 