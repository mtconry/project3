const path =require ("path")
const router= require ("express").Router();
const apiRoutes = require ("./api/apiRoutes");
// const apiRoutes = require("./api/apiRoutes");

router.use("/api", apiRoutes);
// router.user("/api", apiRoutes);

  module.exports = router;