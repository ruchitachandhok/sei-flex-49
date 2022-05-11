var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controller/flights.js');
const flights = require('../models/flights.js');

/* GET users listing. */
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.newFlights);

router.get('/:id', flightsCtrl.show); //always have to be at bottom

// router.get('/new', flightsCtrl.new);
// router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

module.exports = router;