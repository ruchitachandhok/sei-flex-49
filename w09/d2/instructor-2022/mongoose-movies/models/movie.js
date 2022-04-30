const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String]
})
// this would allow us to store a movie doc like:
// { title: "Titanic", year: 1997, mpaaRating: "PG", cast: ["Leo", "Kate"]}
// { title: "Pokemon", year: 1999, mpaaRating: "G", cast: ["Ash", "Pika"]}

let movieModel = mongoose.model('Movie', movieSchema) // specify collection name here
module.exports = movieModel;