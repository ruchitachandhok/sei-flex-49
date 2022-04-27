var express = require('express');
const { use } = require('express/lib/router');
var router = express.Router();

let userCtrl = require('../controllers/userCtrl.js')

router.get('/', userCtrl.index); // GET /users/
router.get('/new', userCtrl.newUserForm) // GET /users/new (show form)
router.get('/:id/edit', userCtrl.edit) // GET /users/0/edit, e.g. (edit form)
router.get('/:id', userCtrl.show); // GET /users/0 for example
router.post('/', userCtrl.create);  // POST /users
router.delete('/:id', userCtrl.deleteUser); // DELETE /users/5
router.put('/:id', userCtrl.update);


module.exports = router;
