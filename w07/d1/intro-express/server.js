const express = require('express')
const app = express()

// routes - all the valid places
// on your webserver
//  "/" = the root route
app.get('/', function(req,res) {
    res.send('<h1>Hey sdfadfdsf</h1>')
})

// route handler - respond to GET request
app.get('/home', function(req,res) {
    // generate + send an EJS file to client
    res.render('home.ejs');
})

// a route handler - handles GET request
app.get('/albums', function(req,res) {
    res.send('Here is a list of albums')
})

// a route handler - handles GET /labs
//  responds with a REDIRECT to google.com
app.get('/labs', function(req,res) {
    // res.redirect('http://google.com') // external
    res.redirect('/home')             // internal
})

// a route handler - handles POST request
app.post('/submit_comments', function(req,res) {
    res.send('thank you')
})

app.listen(3000, function() {
    console.log('Listening on port 3000')
})