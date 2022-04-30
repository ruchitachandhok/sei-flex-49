var express = require('express');
var router = express.Router();

let todosCtrl = require('../controllers/todosCtrl.js')

// this route handler is listening for a POST request.  at this address: handles POST /todos/submit_todos
router.post('/submit_todos', todosCtrl.submit)
router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.newTodo); // // route handler that will display a form. this route handle handles GET /todos/new
router.get('/:id',todosCtrl.show);

module.exports = router;
