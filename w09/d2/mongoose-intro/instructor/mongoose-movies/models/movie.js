const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this schema establishes the structure of our
// collection
const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
}, {
    timestamps: true,
})

// the mongoose model command takes:
//   - the name of the collection (eg., Movie)
//   - the variable containing your schema
const movieModel = mongoose.model('Movie', movieSchema);
module.exports = movieModel