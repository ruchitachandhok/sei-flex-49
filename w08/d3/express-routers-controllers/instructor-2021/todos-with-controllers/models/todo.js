let todos = [
    {id: "0", todo: "buy eggs", done: false},
    {id: "1", todo: "buy salad", done: true},
    {id: "2", todo: "buy milk", done: false},
]

// accepts the incoming todo value? 
function add(todoItem) {
    let obj = {
        id: todos.length,
        todo: todoItem,
        done: false,
    }
    todos.push(obj);
}

function getOne(incomingId) {
    for (let item of todos) {
        if (item.id == incomingId) {
            return item;
        }
    }
    return null;
}

module.exports = {
    getAll,
    getOne,
    add,
}

function getAll() {
    return todos
}