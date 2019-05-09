const router = require("express").Router();
const userController = require("../../controllers/userController");
const formidable = require("formidable");
router.route("/test")
.get((req, res)=>{
    res.send("test1")
});

router.route("/upload")
.post((req, res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(files);
    });
});

router.route("/user")
    .get(userController.findAll)
    .post(userController.create);

module.exports = router;
