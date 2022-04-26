var express = require('express');
var router = express.Router();

let userCtrl = require('../controllers/userCtrl.js')

router.get('/', userCtrl.index); // GET /users/
router.get('/0', userCtrl.show); // GET /users/0 for example
router.get('/new', userCtrl.newUserForm) // GET /users/new (show form)


module.exports = router;
