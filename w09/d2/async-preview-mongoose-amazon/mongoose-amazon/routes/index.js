var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/products')
  // res.render('index.ejs', { title: 'Amazongoose' });
});

module.exports = router;
