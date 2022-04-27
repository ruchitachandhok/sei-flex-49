let users = [
    {id: "0", name: "alex", mood: "happy", friends:[]},
    {id: "2", name: "colin", mood: "content", friends:[]},
    {id: "3", name: "erol", mood: "cheerful", friends:[]},
    {id: "4", name: "gabe", mood: "merry", friends:[]},
    {id: "5", name: "hesham", mood: "joyful", friends:[]},
    {id: "50", name: "irem", mood: "jovial", friends:[]},
    {id: "500", name: "lexi", mood: "jolly", friends:[]},
    {id: "6", name: "ryanne", mood: "jocular", friends:[]},
    {id: "7", name: "ruchita", mood: "gleeful", friends:[]},
    {id: "8", name: "matt", mood: "delighted", friends:[]},
    {id: "9", name: "tatyana", mood: "smiling", friends:[]},
]

function deleteUserFromId(wildCardId) {
    for (let i=0; i < users.length; i++) {
        if (wildCardId == users[i].id) {
            users.splice(i,1)
            return;
        }
    }
}

function create(incoming_obj) {
    users.push(incoming_obj)
}

function getAll() {
    return users;
}

function getUserObjectFromId(userIdFromURL) {
    for (let i=0; i < users.length; i++) {
        if (userIdFromURL == users[i].id) { // compare 
            return users[i]; // return eg., {id: "0", name: "alex", mood: "happy", friends:[]},
        }
    }
    throw new Error('user not found')
}

function updateUser(wildCardId, formData) {
    // 1. loop through the array and find object.id === wildcardId
    for (let i=0; i < users.length; i++) {
        if (wildCardId == users[i].id) {
            // 2. edit the data: {id: "0", name: "alex", mood: "happy", friends:[]},
            users[i].name = formData.name_input
            users[i].mood = formData.mood_input
            return;
        }
    }
}

module.exports = {
    updateUser,
    getAll,
    getUserObjectFromId,
    create,
    deleteUserFromId,
}