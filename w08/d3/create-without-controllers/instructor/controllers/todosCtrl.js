const todoFile = require('../models/todo.js')

function index(req,res) {
    const todoArray = todoFile.getAll();
    res.render('todos-index.ejs',
        {todoArray: todoArray}
    )
}

function show(req,res) {
    // 1. let's verify we are capturing
    //   the todoID that the user requests
    const requestId = req.params.id
    const todoItem = todoFile.getOne(requestId)

    // 3. inject that into the EJS
    res.render('todos-show.ejs', {
        todo: todoItem
    })
}

function create(req,res) {
    console.log("body:",req.body)
    const userTodo = req.body.userTodo
    console.log("the user typed:", userTodo)
    todoFile.create(userTodo)

    res.redirect('/todos')
}

module.exports = {
    index,
    show,
    create,
}