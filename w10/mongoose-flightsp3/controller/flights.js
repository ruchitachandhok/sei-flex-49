const res = require("express/lib/response");
const flightsModel = require("../models/flights.js");
const ticketsModel = require("../models/ticket.js");

function newFlights(req, res, next) {
  res.render("flightsForm.ejs");
}

async function newTickets(req, res, next) {
  let flights = await flightsModel.findById(req.params.id);
  res.render("tickets.ejs", { flights });
  // console.log(req.params.id);
}

async function addTicket(req, res, next) {
  let flightsDetails = await flightsModel.findById(req.params.id);
  let newTicket = await ticketsModel.create(req.body);
  flightsDetails.tickets.push(newTicket.id);
  await flightsDetails.save();
  // console.log(tickets);

  res.redirect("/flights/" + flightsDetails.id);
}

async function index(req, res) {
  // what does this .find do
  let flights = await flightsModel.find();
  res.render("flightsIndex.ejs", { flights });
}
async function show(req, res) {
  let flightsDetails = await flightsModel.findById(req.params.id);

  await flightsDetails.populate("tickets");
  console.log(flightsDetails);
  res.render("flightsShow.ejs", {
    flightsDetails,
  });
}

async function create(req, res) {
  await flightsModel.create({
    airline: req.body.airline,
    airport: req.body.airport,
    flightNo: req.body.flightNo,
    departs: req.body.departs,
  });
  res.redirect("/flights");
}

module.exports = {
  newFlights,
  create,
  index,
  show,
  newTickets,
  addTicket,
};
