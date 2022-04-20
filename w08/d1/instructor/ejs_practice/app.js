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

let counter = 0;

// a route handler
//  - if someone on the internet GET /home 
//  - then i will respond with '<h1>Welcome to my homepage guize</h1>'
app.get('/home', function(req,res) {
  // 1. get data from database
  let x = 7;
  let name = "bob"
  counter++;

  let arr = ["gabe", "tatyana", "erol", "ryanne"]
  let obj = {name: "colin",status: "chillin"};
  
  res.render('homepage.ejs', {
    counter: counter,
    x: x,
    name: name,
    arr: arr,
    obj: obj,
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
