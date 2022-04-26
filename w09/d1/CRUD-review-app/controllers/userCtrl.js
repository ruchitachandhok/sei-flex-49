const res = require('express/lib/response');
let UserModel = require('../models/userModel.js');

function index(req,res) {
    let users = UserModel.getAll();
    res.render('users-index.ejs', {
        users: users,
    });
}

function newUserForm(req,user) {
    res.render('users-new.ejs')
}

function show(req,res) {
    let userIdFromWildcard = req.params.id;
    let userObj = UserModel.getUserObjectFromId(userIdFromWildcard);
    res.render('users-show.ejs', {
    })
}

module.exports = {
    index,
    newUserForm,
    show,
}