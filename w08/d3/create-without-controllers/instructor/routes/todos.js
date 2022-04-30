var express = require('express');
const todosCtrl = require('../controllers/todosCtrl.js')
var router = express.Router();

// if our user sends us a request for 
// GET /todos/, execute the code in this callback function
router.get('/', todosCtrl.index)

// this router will handle URLS of the form
// /TODOS/6    /TODOS/1232 
router.get('/:id', todosCtrl.show)

// here, our server will handle a POST request
router.post('/submit', todosCtrl.create)

module.exports = router;