var express = require('express');
const { use } = require('express/lib/router');
var router = express.Router();

let userCtrl = require('../controllers/userCtrl.js')

// THESE TWO ARE RELATED TO CREATING A NEW USER
router.get('/new', userCtrl.newUserForm) // GET /users/new (show form)
router.post('/', userCtrl.create);  // POST /users

// THESE TWO ARE RELATED TO EDITING A USER
router.get('/:id/edit', userCtrl.edit) // GET /users/0/edit, e.g. (edit form)
router.put('/:id', userCtrl.update);

// ROUTES THAT ARE JUST one-shot
router.get('/', userCtrl.index); // GET /users/
router.get('/:id', userCtrl.show); // GET /users/0 for example
router.delete('/:id', userCtrl.deleteUser); // DELETE /users/5



module.exports = router;
