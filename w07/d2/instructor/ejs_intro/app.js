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

const artist1 = {
  name: "Jen Moon",
  listeners: 17543,
  image: "https://images.squarespace-cdn.com/content/v1/5dbe0ad1270af32a3472575f/1597246685285-9XJUYE8VM0D0T9RNR7OQ/Photo+2020-08-12%2C+11+17+06+AM.jpg"
}

app.get('/artist/1', function(req,res) {
  // for res.render, the second
  // parameter must be an object
  res.render('artistTemplate.ejs', artist1)
})

app.get('/artist/2', function(req,res) {
  res.render('artistTemplate.ejs', {
    name: "Michael Jackson",
    listeners: 266154373,
    image: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/15/35/hbz-michael-jackson-1978-gettyimages-74277232.jpg"
  })
})

app.get('/artist/3', function(req,res) {
  res.render('artistTemplate.ejs')
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
