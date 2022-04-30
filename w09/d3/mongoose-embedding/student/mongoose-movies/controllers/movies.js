const Movie = require('../models/movie');

module.exports = {
  index,
  show,
  new: newMovie,
  create
};

async function index(req,res) {
    let movies = await MovieModel.find(); // TODO: try-catch error-handling
    //console.log("movies", movies)
    res.render('movies/index.ejs', {
        title: 'All Movies',
        movies
    })
}

// callback syntax example:
// function index(req, res) {
//   Movie.find({}, function(err, movies) {
//     res.render('movies/index', { title: 'All Movies', movies });
//   });
// }

// callback syntax example for "show"
async function show(req,res) {
  let result = await Movie.findById(req.params.id); // TODO: try-catch error handling
  res.render('movies/show.ejs', { 
    title: 'Movie Detail', movie 
  });
}

// function show(req, res) {
//   Movie.findById(req.params.id, function(err, movie) {
//     res.render('movies/show', { title: 'Movie Detail', movie });
//   });
// }



function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

async function create(req, res) {
  // console.log("incoming form data from customer/browser to our server", req.body)
  
  req.body.nowShowing = !!req.body.nowShowing;                   // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');        // remove whitespace next to commas
  if (req.body.cast) req.body.cast = req.body.cast.split(',');   // split if it's not an empty string
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  await Movie.create(req.body); // TODO: try-catch error-handling
  res.redirect('/movies');

}

// callback syntax example
// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   // remove whitespace next to commas
//   req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   // split if it's not an empty string
//   if (req.body.cast) req.body.cast = req.body.cast.split(',');
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   const movie = new Movie(req.body);
//   movie.save(function(err) {
//     // one way to handle errors
//     if (err) return res.redirect('/movies/new');
//     console.log(movie);
//     // for now, redirect right back to new.ejs
//     res.redirect('/movies');
//   });
// }
