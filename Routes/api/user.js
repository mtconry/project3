const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/user")
    .get(userController.findAll)
    .post(userController.create);

module.exports = router;
