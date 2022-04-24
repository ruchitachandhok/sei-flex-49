const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String, // "eg., This movie is amazing"
  rating: {type: Number, min: 1, max: 5, default: 5},
}, {
  timestamps: true
})

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  reviews: [reviewSchema], // <-- we embed reviews into a movie!
  nowShowing: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Film', movieSchema);