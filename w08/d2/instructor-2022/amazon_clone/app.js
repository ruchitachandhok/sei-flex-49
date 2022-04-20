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

let products_database = [
  {id: "00", name: "farm animals in a tube", price: 10, stock: 50},
  {id: "01", name: "rubber duck liberated", price: 11, stock: 0 },
  {id: "02", name: "ball",                  price: 123, stock: 123},
  {id: "03", name: "rubber duck in a tub", price: 999, stock: 10},
  {id: "04", name: "twilight: the book :(", price: -20, stock: 0}
]

app.get('/home', function(req,res) {
  res.render('products-index.ejs', {
    products_database: products_database,
  })
})

app.get('/products/:id', function(req,res) {
  // 1. to reference your wildcard, req.params.variablename
  console.log("incoming url param is", req.params.id)
  // 2. we can do a lookup on our database using eg., id 5
  for (let i = 0; i < products_database.length; i++) {
    if (req.params.id == products_database[i].id) { // <-- does incoming id match
                                                    // any of our products?
        let foundProduct = products_database[i]; // <--- save the prodct here
        res.render('product-template.ejs', {
            foundProduct:foundProduct
        })
        return;
    }
  }
  // if we've gone through the for loop and we haven't returned out of
  // TODO: res.render something else useful - 404 page?
  res.send('404 page')
})

// dont type this - this is the wrong way
app.get('/products/0', function(req,res) {
  res.render('product-0.ejs')
})
app.get('/products/1', function(req,res) {
  res.render('product-1.ejs')
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
