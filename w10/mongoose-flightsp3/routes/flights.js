var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controller/flights.js");

/* GET users listing. */

router.get("/", flightsCtrl.index);

router.get("/new", flightsCtrl.newFlights);

router.post("/", flightsCtrl.create);

router.get("/:id", flightsCtrl.show);

router.get("/:id/tickets", flightsCtrl.newTickets);

router.post("/:id/tickets", flightsCtrl.addTicket);

module.exports = router;
