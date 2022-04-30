const todos = [
    {id: "125223", todo: 'Feed Dogs', done: true},
    {id: "127904", todo: 'Learn Express', done: false},
    {id: "139608", todo: 'Buy Milk', done: false}
];

function create(userTodo) {
    let obj = {
        id: Math.random() + "",
        todo: userTodo,
        done: false,
    }
    todos.push(obj) // push obj into []
}

module.exports = {
    getAll,
    getOne,
    todos,
    create,
};

function getAll() {
    return todos;
}
function getOne(requestedProductID) {
    // Use a loop to search the todos array to see if we have the productID that our client is requesting
    for (let item of todos) {
       if (item.id == requestedProductID) { // product exists in our database!
          return item
       }
    }
    // okay so we looped through the entire thing and found nothing
    return null;
}


