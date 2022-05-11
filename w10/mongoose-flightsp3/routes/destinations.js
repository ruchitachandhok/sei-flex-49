var express = require("express");
var router = express.Router();
const destinationCtrl = require("../controller/destinations.js");

/* GET users listing. */

router.post("/flights/:id/destinations", destinationCtrl.create);

module.exports = router;
