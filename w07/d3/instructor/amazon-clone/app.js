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

const products = [
  {id:"0",name:"bic pen",description:"very 90s",price:3},
  {id:"1",name:"highlighter",description:"yellow",price:5.99},
  {id:"2",name:"eraser",description:"pink",price:7.00},
  {id:"3",name:"calculat0r",description:"casio",price:10},
]

// index functionality - display ALL the products
app.get('/products', function(req,res) {
  res.render('product-index.ejs', {products: products,})
})

// here, we define a route parameter called productId
// using a colon followed by the parameter name
app.get('/products/:productId/', function(req,res) {
  // console.log("query parameters", req.query)
  console.log("req.params.productId",req.params.productId)
  console.log("req.params",req.params)
  // we have the product id now, eg., 3
  for(let product of products) {
    if (product.id == req.params.productId) {
      res.render('product-details.ejs', {product:product})
      return;
    }
  }
  res.render('404.ejs')
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
