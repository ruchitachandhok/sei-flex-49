// this is our fake database
const todos = [
    {todo: "Feed the Dogs", done: true},
    {todo: "Learn Express", done: false},
    {todo: "Buy Milk", done: false}
]

function getAll() {
    return todos;
}

module.exports = {
    getAll,
    todos,
    secretPassword: "123"
}