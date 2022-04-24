const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  born: Date,
  //movieId: Schema.Types.ObjectId <- alternate way t establish 1-to-many
}, {
  timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);