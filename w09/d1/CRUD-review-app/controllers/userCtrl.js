// const res = require('express/lib/response');
let UserModel = require('../models/userModel.js');

function index(req,res) {
    let users = UserModel.getAll();
    res.render('users-index.ejs', {
        users: users,
    });
}

function newUserForm(req,res) {
    res.render('users-new.ejs')
}

function show(req,res) {
    let userIdFromWildcard = req.params.id;
    let userObj = UserModel.getUserObjectFromId(userIdFromWildcard);
    res.render('users-show.ejs', {
        userObj, // means userObj:userObj,
    })
}

function create(req,res) {
    console.log("form data", req.body)
    let obj = {
        id: Math.random().toString(),
        name: req.body.user_name, // grab the incoming user_name
        mood: req.body.user_mood,
    }
    // we need tot have an object to push
    // push that information to your model
    UserModel.create(obj)
    res.send('tyvm')
}

function deleteUser(req,res) {
    let userIdFromWildcard = req.params.id;
    UserModel.deleteUserFromId(userIdFromWildcard);
    // remove the item from the database
    res.redirect('/users')
}

function edit(req,res) {
    let wildCardValue = req.params.id;
    let obj = UserModel.getUserObjectFromId(wildCardValue)
    res.render('users-edit.ejs', { obj: obj })
}

function update(req,res) {
    let wildcard = req.params.id;
    UserModel.updateUser(wildcard, req.body)
    res.redirect('/users/' + req.params.id)
}

module.exports = {
    update,
    edit,
    index,
    newUserForm,
    show,
    create, // always be exporting 
    deleteUser,
}