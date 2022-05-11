const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketsSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?$/ },
  price: { type: Number },
});

module.exports = mongoose.model("tickets", ticketsSchema);
