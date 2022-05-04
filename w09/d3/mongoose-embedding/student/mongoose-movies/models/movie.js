const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
  content: String,
  rating: Number,
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
  reviews: [reviewSchema], //this is an array of subdocuments
  nowShowing: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);