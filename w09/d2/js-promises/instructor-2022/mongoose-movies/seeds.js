 require('./config/database');// connect this script to the database
 const Movie = require('./models/movie');
 const Performer = require('./models/performer');
 const data = require('./data');

 // promise-based syntax
Movie.deleteMany()
.then(results => {
    return Performer.deleteMany()
})
.then(results => {
    return Performer.create(data.performers)
})
.then(results => {
    return Movie.create(data.movies)
})
.then(function() {
    process.exit();
});

// async-await syntax
async function populate() {
    await Movie.deleteMany()
    await Performer.deleteMany()
    await Movie.create(data.movies)
    await Performer.create(data.movies)
}
populate();