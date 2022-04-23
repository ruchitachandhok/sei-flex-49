// import our data into our controller
// file
const todoFile = require('../models/todo.js')

function index(req,res) {
    let todoArr = todoFile.getAll();
    res.render('todos-index.ejs', {
        todos: todoArr
    })
}

function show(req,res) {
     // contains w/e the user typed 
     //eg., /todos/1 will have req.params.id = 1
    let todoId = req.params.id;
    let todoObj = todoFile.getOne(todoId);
    res.render('todos-detail.ejs', {
        todo: todoObj
    })
}

function create(req,res) {
    /// req.body will contain incoming FORM DATA
    console.log(req.body)
    todoFile.add(req.body.addTodo)
    res.redirect('/todos') // redirect to a route
}

module.exports = {
    index,
    show,
    create,
}