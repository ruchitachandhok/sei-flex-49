// The ids can be generated using:
// Date.now() % 1000000
const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];

function deleteOneWithLoop(incomingId) { // id might be something like 125223
  // 1. find the matching index
  let deleteIndex;
  todos.forEach(function(item, index) {
    if (item.id == incomingId) {
      deleteIndex = index
    }
  })
  // 2. splice
  todos.splice(deleteIndex, 1)
}

module.exports = {
  getAll,
  getOne,
  addToDB,
  deleteOne,
  deleteOneWithLoop,
  findOneAndUpdate,
};

function findOneAndUpdate(id, incomingStr) {
  const idx = todos.findIndex((todo) => todo.id === parseInt(id));
  todos[idx].todo = incomingStr
  return todos[idx]
}

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id === parseInt(id));
  todos.splice(idx, 1);
}

function addToDB(incomingStr) {
  let obj = {
    id: Date.now() % 1000000,
    todo: incomingStr,
    done: false,
  }
  todos.push(obj)
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return todos.find(todo => todo.id === parseInt(id));
}

function getAll() {
  return todos;
}