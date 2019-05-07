const User = require("../models/users")
const router = require("express").Router();
const cloudinary = require('cloudinary');
const Datauri = require('datauri');
var multer  = require('multer');
const path = require('path');


//Image upload middleware and buffer converter
var storage = multer.memoryStorage();
var multerUpload = multer(storage).single("image");
var dUri = new Datauri();
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

router.get("/test",(req, res)=>{
    res.send("test1")
});

router.post("/profile", multerUpload, (req, res) =>{
    console.log(req)
    if(req.file){
    console.log("hello")
    console.log(req.file)
    var file = dataUri(req).content;
    let {userName} = req.body;
    cloudinary.uploader.upload(file, (result) => {
        console.log("hi")
        console.log(result)
        Users
            .create({
                userName: userName,
                picture: result.secure._url,
                email: email,
                location: location,
                description: description,
                facebookId: facebookId,
                googleId: googleId
            }).then(function (newPic){
                return userName.findOneAndUpdate({_id:req.user._id},{$push:{dbUsers:newPic._id}});
            }).then(dbUsers => res.json(dbUsers))
              .catch(err => res.status(422).json(err))
        
    });
}
});



module.exports = router

