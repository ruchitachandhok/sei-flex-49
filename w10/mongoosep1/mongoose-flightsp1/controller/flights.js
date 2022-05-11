//in controller, you create all the functions.

const res = require("express/lib/response");
const flightModel = require("../models/flights.js");

//const flights = require('../models/flights.js')

function newFlights(req, res, next){
    res.render("flightsForm.ejs");
}

async function create(req,res){
    await flightModel.create({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: req.body.flightNo,
        departs: req.body.departs,

    })
    res.redirect("/flights");
}

async function index(req, res, next) {
    let flights = await flightModel.find();
    res.render("flightsindex.ejs", { flights }); //this is passing the entire DB.
  }

async function show (req, res){
    let flightsDetails = await flightModel.findById(req.params.id); //this the URL id.
    res.render("flightsShow.ejs", { flightsDetails }); //this is passing the object
}

module.exports = {index, show, newFlights, create};