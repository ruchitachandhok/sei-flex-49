var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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

// a route handler
//  - if someone on the internet GET /home 
//  - then i will respond with '<h1>Welcome to my homepage guize</h1>'
app.get('/home', function(req,res) {
  let pokemon_list_from_db = [
    {id: "1", name: "raichu"},
    {id: "2", name: "pikachu"},
    {id: "3", name: "jigglypuff"},
    {id: "4", name:"snorlax"},
    {id: "5", name:"bulbasaur"},
  ]
  
  res.render('homepage.ejs', {
    pokemon_list_from_db: pokemon_list_from_db,
  })
})





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
