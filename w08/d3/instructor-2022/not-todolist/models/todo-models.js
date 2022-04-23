let todos_database = [
    {id: "0", task: "irem's groceries", done: false},
    {id: "1", task: "sort tatyana's laundry", done: false},
    {id: "2", task: "washing erol's dishes", done: false},
]

function createTodo(incoming_obj) {
    todos_database.push(incoming_obj);
}

function findAllTodos() {
    return todos_database;
}

module.exports = { // 1. exporting the array
    createTodo: createTodo,
    todos_database: todos_database,
    findAllTodos: findAllTodos,
}