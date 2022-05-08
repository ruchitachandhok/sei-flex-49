const passport = require('passport');
const Student = require('../models/student');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function (accessToken, refreshToken, profile, cb) {
        // a user has logged in OAuth...
        // is this a new user? or someone who's logged in before
        console.log("data from consent screen", profile)
        Student.findOne({ 'googleId': profile.id }, function(err,student) {
            if (err) return cb(err);
            if ( student) { // <-- findOne worked!
                return cb(null, student);
            } else { // <-- findOne failed -- this is a new user
                var newStudent = new Student({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    // spotifyAccesToken: accessToken,
                })
                newStudent.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newStudent);
                })
            }
        })
    }
))

passport.serializeUser(function(student,done) { // what to put in the cookie
    done(null, student.id);
})

// passport will create req.user variable if a logged-in user is making requests
// if a non-logged in user, req.user will be undefined
// req.user might look like this {
//    id: 'adsfs', name: 'ryanne', googleId: '123', facts:[]
//}
// ... and will be available to all controllers
passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
        done(err, student);
    })
})
