let users = [
    {id: "0", name: "alex", mood: "happy", friends:[]},
    {id: "2", name: "colin", mood: "content", friends:[]},
    {id: "3", name: "erol", mood: "cheerful", friends:[]},
    {id: "4", name: "gabe", mood: "merry", friends:[]},
    {id: "5", name: "hesham", mood: "joyful", friends:[]},
    {id: "5", name: "irem", mood: "jovial", friends:[]},
    {id: "5", name: "lexi", mood: "jolly", friends:[]},
    {id: "6", name: "ryanne", mood: "jocular", friends:[]},
    {id: "7", name: "ruchita", mood: "gleeful", friends:[]},
    {id: "8", name: "matt", mood: "delighted", friends:[]},
    {id: "9", name: "tatyana", mood: "smiling", friends:[]},
]

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

module.exports = {
    getAll,
    getUserObjectFromId,
}