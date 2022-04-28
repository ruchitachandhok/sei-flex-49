// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const movieSchema = new Schema({
//     name: String,
//     releaseYear: Number,
//     mpaaRating: String,
//     cast: [String],
// })

// let movieModel = mongoose.model('Movie', movieSchema)
// module.exports = movieModel;

// //this would allow us to store a movie doc
// //like:
// // {title: "titanic", year: 1999, mpaaRating: "PG", cast: ["Leo", "Kate"]}
// // { title: "Pokemon", year: 1999, mpaaRating: "G", cast: ["Ash, "Pike"]}

var express = require('express')
var router = express.Router();

let movieCtrl = require ('../controllers/movieCtrl.js')

// renders the form. GET /movies/new
router.get('/new', movieCtrl.newMovie);

// handles POST /movies
router.post('/', movieCtrl.create)

module.exports = router;