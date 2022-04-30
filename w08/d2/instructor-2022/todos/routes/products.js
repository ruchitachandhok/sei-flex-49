var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    console.log('you are trying to access id#', 
                  req.params.id)
    res.send('this is our products list');
    //res.render('filename.ejs', {})
  });


/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('this is our products list');
  //res.render('filename.ejs', {})
});


module.exports = router;
