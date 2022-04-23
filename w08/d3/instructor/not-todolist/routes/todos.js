var express = require('express');
var router = express.Router();

let Todo = require('../models/todo-models.js') // <-- imports step# 2. importing the exports {} from todo-models.js
let findAllTodos = Todo.findAllTodos; // <-- imports step #3a. grab function from imports
let todos_database = Todo.todos_database; // <-- imports step #3b. or, alternately, grab array from imports

router.get('/', function(req, res, next) { // get /TODOS
  res.render('todos-index.ejs', {todos_database: todos_database});
});

// route handler that will display a form
router.get('/new', function(req,res,next) {
    res.render('new-todo-form.ejs')
})

// this route handler is listening for a POST request
//   at this address: 
//  handles POST /todos/submit_todos
router.post('/submit_todos', function(req,res,next) {
    console.log("logging incoming data",req.body)
    res.send('thank you for submitting your task. we will contact you')
})



module.exports = router;
