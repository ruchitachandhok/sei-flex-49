const Movie = require('../models/movie.js')

async function create(req,res) {
    let movieId = req.params.id; // <-- retrieve movieID
    // console.log("form data", req.body) // we need to put the form data into the database
    let movieDoc = await Movie.findById( movieId ); // <-- query DB: here's the id, give me the movie
    
    // new stuff: how to add a subdocument(ie., review) to a doc (ie., movie)
    let reviewObj = {
        content: req.body.content,
        rating: req.body.rating,
    }
    movieDoc.reviews.push(reviewObj)
    await movieDoc.save(); //<-- modifying a property of a doc

    res.redirect('/movies/' + movieId)
}

module.exports = {
    create,
}