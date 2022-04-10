var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

// GET /todos/new will deliver a form to the user
router.get('/new', todosCtrl.new)

// actual handler for handling the post request
router.post('/handleForm', todosCtrl.create)

router.get('/:id', todosCtrl.show);

// handles requests for DELETE /todos/2  or /todos/5
router.delete('/:id', todosCtrl.deleteTodo);



// /todos/331945
// Route for showing the form
router.get('/:id/update', todosCtrl.updateForm)
// Route for submitting the form
router.put('/:banana/update', todosCtrl.update)

module.exports = router;
