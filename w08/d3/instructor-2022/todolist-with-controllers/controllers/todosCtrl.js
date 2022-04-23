module.exports = {
    submit: submit,
    index: index,
    newTodo: newTodo,
    show:show,
}

// these imports are importing the models. these imports WERE in routes/todos.js. now they are in controllers/todosCtrl.js
let Todo = require('../models/todo-models.js') // <-- imports step# 2. importing the exports {} from todo-models.js
let findAllTodos = Todo.findAllTodos; // <-- imports step #3a. grab function from imports
let todos_database = Todo.todos_database; // <-- imports step #3b. or, alternately, grab array from imports
let createTodo = Todo.createTodo;

function show(req,res) {
    let wildCardValue = req.params.id;
    for (let i = 0; i < todos_database.length; i++) {
        if (todos_database[i].id == wildCardValue) {
            res.render('show.ejs', {
                foundObject: todos_database[i],
            })
            return;
        }
    }
    res.send('sorry your item doesnt exist');
}

function newTodo(req,res,next) {
    res.render('new-todo-form.ejs')
}

function index(req, res, next) { // get /TODOS
    res.render('todos-index.ejs', {todos_database: todos_database});
}


function submit(req,res,next) {
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


    //res.send('thank you for submitting your task. we will contact you')
    res.redirect('/todos')
}