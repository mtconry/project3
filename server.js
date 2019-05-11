const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const Routes = require("./Routes")
const app = express();
const formData = require('express-form-data')
const db = require("./models");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

//coludinary config
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDNAME,
  api_key: process.env.REACT_APP_APIKEY,
  api_secret: process.env.REACT_APP_APISECRET
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
  app.use(formData.parse())
  
  // Send every other request to the React app
  // Define any API routes before this runs
  
  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
    
  
  
  
  
  
  
  app.post('/image-upload-single', (req, res) => {
  
  const path = req.files[0].path

  console.log(path);
  cloudinary.uploader.upload(path)
    .then(image => {
      
      console.log("image uploaded");

      const imageUrl = [image][0].url; //actual image path

      //var x = db.user.find()

      //x .url 

      // var j = x.url + imageUrl

      //db.User.update({googleId:req.body.googleId},{url:j}).
      
        db.User.update({googleId:req.body.googleId},{url:imageUrl}).then(item=>{console.log("updated database"); res.json([image])}).catch(err => {
          res.status(400).send("unable to save to database");
          });
      })
})



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

