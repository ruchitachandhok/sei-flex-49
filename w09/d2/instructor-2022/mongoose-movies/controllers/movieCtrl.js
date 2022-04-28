// importing model soon
let MovieModel = require('../models/movie.js')

async function index(req,res) {
    let movies = await MovieModel.find();
    //console.log("movies", movies)
    res.render('movies-index.ejs', {
        movies
    })
}

//async function show(req,res) {
    // let movie = await MovieModel.findById(wildcard);
//}

function newMovie(req,res) {
    //res.send('here is a form:')
    res.render('new.ejs')
}


async function create(req,res) {
    console.log(req.body)
    let obj = {
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        mpaaRating: req.body.mpaaRating,
        cast: [],
    }
    await MovieModel.create(obj); // <-- method that puts our obj into mongo
    
    res.send('tyvm')
}

module.exports = {
    newMovie,
    create,
    index,
}