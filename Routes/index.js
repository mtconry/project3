const path =require ("path")
const router= require ("express").Router();
const apiRoutes = require ("./api/user")

router.use("/api", apiRoutes);

  module.exports = router;