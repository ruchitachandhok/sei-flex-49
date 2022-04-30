var express = require('express');
var router = express.Router();

let movieCtrl = 
 require('../controllers/movieCtrl.js')

router.get('/', movieCtrl.index) // GET /movies
router.get('/new', movieCtrl.newMovie); // renders the form. GET /movies/new
router.post('/', movieCtrl.create) // handles POST /movies

module.exports = router;
