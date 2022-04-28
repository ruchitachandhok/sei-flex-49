// importing model soon

const movieModel = require("../models/movie")
const { modelName } = require("../models/movie")

function newMovie(req,res) {
    //res.send('here is a form:')
    res.render('new.ejs')
}

let MovieModel = require('../models/movie.js')

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
}