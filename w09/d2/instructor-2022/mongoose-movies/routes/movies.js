var express = require('express');
var router = express.Router();

let movieCtrl = 
 require('../controllers/movieCtrl.js')

// renders the form. GET /movies/new
router.get('/new', movieCtrl.newMovie);
// handles POST /movies
router.post('/', movieCtrl.create)

module.exports = router;
