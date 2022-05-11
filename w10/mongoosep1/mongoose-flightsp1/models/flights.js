const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const flightsSchema = new Schema({
//   content: String,
//   rating: {type: Number, min: 1, max: 5, default: 5}
// }, {
//   timestamps: true
// });

const flightsSchema = new Schema({
  airline: {
    type: String,
    required: true,
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
},
{
    timestamps: true,
  });

let flightModel = mongoose.model('flights', flightsSchema);
module.exports = flightModel;