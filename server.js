const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const Routes = require("./Routes")
const app = express();

const cloudinary = require('cloudinary');
const mongoose = require("mongoose");
require("dotenv").config();

//coludinary config
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/check-N-Go",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)
// Define API routes here

// const routes = require("./Routes/api/apiRoutes");
app.use(Routes)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
