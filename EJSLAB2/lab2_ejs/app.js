var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let x = 5
let myFavouriteFruit = "Mango"

let viewCount = 0;


let pokemon_list_from_db = [
  {id: "001", name:"squirtle", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},
  {id: "002", name:"raichu", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"},
  {id: "003", name:"snorlax", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},
  {id: "004", name:"bulbasur", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},
]

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// add your route handler here
app.get('/boring', function(req, res) {
  res.send('<h1>This is a boring line of textsent with res.send</h1>')
});

app.get('/really_exciting', function(req, res) {
  viewCount++;
  res.render('really_exciting.ejs',{
      viewCount: viewCount,
  });
});

app.get('/notboring', function(req, res) {
    res.render('exciting.ejs',{
    pokemon_list_from_db: pokemon_list_from_db,
  });
});

app.get('/display_my_array', function(req, res) {
  res.render('pokemon.ejs',{
  pokemon_list_from_db: pokemon_list_from_db,
});
});

app.get('/dynamic_template_practice', function(req, res) {
  res.render('test.ejs', {x: x, favFruit: myFavouriteFruit, name: "Ruchita"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
