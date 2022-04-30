var express = require('express');
var router = express.Router();
// we have imported the controller file
const todosCtrl = require('../controllers/todoCtrl.js')

// a get handler for /todos
router.get('/', todosCtrl.index)

// GET /todos/0, GET /todos/1, etc.
router.get('/:id', todosCtrl.show)

// we are handling a POST request FROM the form
router.post('/submit', todosCtrl.create)

module.exports = router;
