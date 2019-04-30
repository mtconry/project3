const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
    location: {type: String, required: true },
    user: { type: String, required: true },
    time: {type: String, required: true },
    description: {type: String, required: true },
    image: {type: String, required: true },
    tags: {type: String, required: true }
});

const Locations = mongoose.model("Location", locationsSchema);

module.exports = Locations;