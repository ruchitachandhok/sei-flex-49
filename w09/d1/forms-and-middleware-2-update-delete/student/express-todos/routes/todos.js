var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

// GET /todos/new will deliver a form to the user
router.get('/new', todosCtrl.new)

// actual handler for handling the post request
router.post('/handleForm', todosCtrl.create)

router.get('/:id', todosCtrl.show);

module.exports = router;
