var router = require('express').Router();

// require passport
const passport = require('passport');


// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

// Google OAuth login route
// LOGIN BUTTON will point here. This will take user to Google
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
// This will handle the user coming back from google
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students', // user consents!
    failureRedirect : '/students' // what to do if the user doesn't login
  }
));

router.get('/logout', function(req,res) {
  req.logout(); // <-- req.logout which just sets req.user = null
  res.redirect('/students')
})

module.exports = router;