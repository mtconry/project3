const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const Routes = require("./Routes")
const app = express();
const formData = require('express-form-data')

const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
require("dotenv").config();

//coludinary config
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDNAME,
  api_key: process.env.REACT_APP_APIKEY,
  api_secret: process.env.REACT_APP_APISECRET
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
  process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds155086.mlab.com:55086/heroku_7jndmb45",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)
// Define API routes here

// const routes = require("./Routes/api/apiRoutes");
app.use(Routes)
app.use(formData.parse())

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.post('/image-upload-single', (req, res) => {
  
  const path = req.files[0].path


  console.log(path);
  cloudinary.uploader.upload(path)
    .then(image => {
      
      console.log("image uploaded");
      res.json([image])})
})



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
