const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Student = require('../models/student')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("Google's info:", profile)
    Student.findOne({ 'googleId': profile.id }, function(err, student) {
      if (err) return cb(err);
      // CASE: ERIC EXISTS. We simply return the user to passport
      if (student) {
        return cb(null, student);
      } else {
        // we have a new student via OAuth!
        var newStudent = new Student({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newStudent.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStudent);
        });
      }
    });
  }
));

// converts {name: "Eric"} ---> sessionID
passport.serializeUser(function(student, done) {
    done(null, student.id);
});

// converts sessionID ---> {name: "Yousuf"}
passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
      done(err, student);
    });
});