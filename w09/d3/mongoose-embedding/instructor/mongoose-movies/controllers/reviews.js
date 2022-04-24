// this is whwere we import our movie model
// the variable name uppercamel case is standard
// --- we can use this to call mongoose methods., 
// ----   eg., Movie.create() Movie.
const Movie = require('../models/movie.js')

async function create(req,res) {
    try {
        console.log("id",req.params.id)
        // 1. we will find the movie that our user is trying to review
        const movie = await Movie.findById(req.params.id)
        // 2. insert a subdocument
        movie.reviews.push({
            content: req.body.content,
            rating: req.body.rating,
        })
        await movie.save(); // <--- step 2 of inserting subdoc
        res.redirect('/movies/' + req.params.id)
    } catch(err) {
        res.send('there was an error')
    }
}

module.exports = {
    create,
}