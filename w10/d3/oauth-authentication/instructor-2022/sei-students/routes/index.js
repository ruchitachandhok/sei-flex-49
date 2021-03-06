var router = require('express').Router();
const passport = require('passport')

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

// handle the URL that our login button will point to
// passport will take the user to the consent screen
router.get('/auth/google', passport.authenticate(
  'google',
  { 
    scope: ['profile', 'email'],
    prompt: "select_account",
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/students',
    failureRedirect: '/students',
  }
))

// logout button points here
router.get('/logout', function(req,res) {
  req.logout();
  res.redirect('/students')
})

module.exports = router;