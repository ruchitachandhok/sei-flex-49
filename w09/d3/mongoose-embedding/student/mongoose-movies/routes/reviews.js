const express = require('express');
const router = express.Router();

let reviewsCtrl = require('../controllers/reviews.js')

router.post('/movies/:id/reviews', reviewsCtrl.create);

movie.exports = router;