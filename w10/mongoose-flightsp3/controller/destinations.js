const res = require("express/lib/response");
var flightsModel = require("../models/flights.js");

async function create(req, res, next) {
  let flight = await flightsModel.findById(req.params.id);
  flight.destinations.push(req.body);
  await flight.save();
  res.redirect("/flights");
}

module.exports = { create };
