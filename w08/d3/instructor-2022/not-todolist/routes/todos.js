var express = require('express');
var router = express.Router();

let Todo = require('../models/todo-models.js') // <-- imports step# 2. importing the exports {} from todo-models.js

let findAllTodos = Todo.findAllTodos; // <-- imports step #3a. grab function from imports
let todos_database = Todo.todos_database; // <-- imports step #3b. or, alternately, grab array from imports
let createTodo = Todo.createTodo;

// this route handler is listening for a POST request
// at this address: handles POST /todos/submit_todos
router.post('/submit_todos', function(req,res,next) {
    // req.body is an {} containing all the form data
    console.log("logging incoming data",req.body)

    // we'd like to push the data into our database but first have to
    // make it look of the form  {id: "3", task: "Matts Labs", done: true} 
    // the frontend sends us: req.body = { task_input: 'Matts Labs' }
    let obj = { id: "", task: "", done: false}
    obj.task = req.body.task_input; // {id: "", task: MattsLabs, done: false}
    obj.id = (Date.now()).toString() // generate random id
    if (req.body.task_checkbox && req.body.task_checkbox === 'on') {
      obj.done = true;
    } else {
      obj.done = false;
    }

    //todos_database.push(obj) // push our obj into our database
    createTodo(obj);


    res.send('thank you for submitting your task. we will contact you')
})


router.get('/', function(req, res, next) { // get /TODOS
  res.render('todos-index.ejs', {todos_database: todos_database});
});

// route handler that will display a form
// this route handle handles GET /todos/new
router.get('/new', function(req,res,next) {
    res.render('new-todo-form.ejs')
})


module.exports = router;
