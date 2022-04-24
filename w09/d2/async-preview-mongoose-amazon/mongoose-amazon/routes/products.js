const express = require('express');
const router = express.Router();
// productsCtrl represents functions in our controllers file
const productsCtrl = require('../controllers/productsCtrl.js')

router.get('/', productsCtrl.index)
router.get('/new', productsCtrl.newProduct)
router.post('/handleForm', productsCtrl.handleForm)
router.get('/:id', productsCtrl.show)

module.exports = router;
