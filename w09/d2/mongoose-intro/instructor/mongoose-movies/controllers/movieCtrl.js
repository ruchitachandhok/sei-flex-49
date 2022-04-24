//const Movie = <-- the more standard import
const movieModel = require('../models/movie.js');
const MovieModel = require('../models/movie.js')

function newMovie(req,res) {
    res.render('movies/new.ejs')
}

async function create(req,res) {
    await MovieModel.create({
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        mpaaRating: req.body.mpaaRating,
    })
    res.redirect('/')
}

async function index(req,res) {
    // get ALL the movies from the collection
    const results = await MovieModel.find();
    // injects those results into our EJS
    // + sends the generated HTML to the client
    console.log("results", results)
    res.render('movies/index.ejs', {
        results: results,
    })
}

async function show(req,res) {
    console.log('incoming', req.params.id)
    // let result = await MovieModel.findOne({
    //     _id: req.params.id
    // })
    let result = await MovieModel.findById(req.params.id)
    console.log('result', result)
    res.render('movies/show.ejs', {result})
}

module.exports = {
    newMovie,
    create,
    index,
    show,
}