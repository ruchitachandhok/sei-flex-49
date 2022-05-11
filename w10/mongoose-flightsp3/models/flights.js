const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
  },
});

const flightsSchema = new Schema({
  airline: {
    type: String,
  },
  airport: {
    type: String,
  },

  flightNo: {
    type: Number,
  },
  departs: {
    type: Date,
  },
  destinations: [destinationSchema],

  tickets: [{ type: Schema.Types.ObjectId, ref: "tickets" }],
});

flightsModel = mongoose.model("flights", flightsSchema);
module.exports = flightsModel;
