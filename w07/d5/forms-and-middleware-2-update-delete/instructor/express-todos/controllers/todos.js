var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  deleteTodo,
  updateForm,
  update
};

function updateForm(req, res) {
  let todo = Todo.getOne(req.params.id)
  res.render('todos/update', { todo: todo })
}

function update(req, res) {
  let todo = Todo.findOneAndUpdate(req.params.banana, req.body.newerTodo)
  res.redirect('/todos/' + todo.id)
}

function deleteTodo(req,res) {
  const incomingId = req.params.id
  //TodoModelFile.
  Todo.deleteOneWithLoop(incomingId)
  res.redirect('/todos')
}

function create(req,res) {
  console.log(req.body.newerTodo,"incoming data")
  Todo.addToDB(req.body.newerTodo)
  res.redirect('/todos')
}

function newTodo(req,res) {
  res.render('todos/new.ejs')
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  });
}
