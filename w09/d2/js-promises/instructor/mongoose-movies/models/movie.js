const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  views: Number,
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  nowShowing: { type: Boolean, default: false },
  reviews: [reviewSchema],
  cast: [{type: Schema.Types.ObjectId, ref: 'Performer'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);