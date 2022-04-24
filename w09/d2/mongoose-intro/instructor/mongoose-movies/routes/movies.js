var express = require('express');
var router = express.Router();
const movieCtrl = require('../controllers/movieCtrl.js')

// this route responds to GET /movies
router.get('/', movieCtrl.index)
// this route responds to GET /movies/new
router.get('/new', movieCtrl.newMovie)

// this route responds to GET /movies/12321
router.get('/:id', movieCtrl.show)

// this route responds to POST /movies/
router.post('/', movieCtrl.create)

module.exports = router;