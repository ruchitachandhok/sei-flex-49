const Movie = require('../models/movie');
const Performer = require('../models/performer') // import performers model

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  addToCast // ABE
};

async function addToCast(req,res) {
  console.log("movie we're adding to", req.params.id)
  console.log("form data", req.body)

  // retrieve movie from DB
  let movie = await Movie.findById(req.params.id)

  // then add the performer to it
  let performerId = req.body.performerId
  movie.cast.push(performerId)
  await movie.save()

  res.redirect(`/movies/${movie.id}`)
}

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}

function show(req, res) {
  // step 1 - movie.find
  Movie.findById(req.params.id, function(err, movie) {

    // step 2- performer.find
    Performer.find(function(err, performers) {

      // step 3- res.render
      res.render('movies/show', { 
        title: 'Movie Detail', 
        movie,
        performers
      });

    })
  });
}

// async function showAsync(req,res) {
//   let performers = await Performer.find(); // all performers
//   let movie = await Movie.findById(req.params.id);
//   res.render('movies/show', { 
//     title: 'Movie Detail', 
//     movie,
//     performers,
//   });
// }

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    console.log(movie);
    res.redirect('/movies');
  });
}
