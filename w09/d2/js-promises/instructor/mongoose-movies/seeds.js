require('./config/database');// connect this script to the database
const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');




// Movie.deleteMany({}) // returns a promise
// .then(results=> {
//     return Movie.create(data.movies)
// })
// .then(results => {
//     process.exit(); // exits the node process
// })
// .catch(err => {
//     console.log("error:", err)
// })