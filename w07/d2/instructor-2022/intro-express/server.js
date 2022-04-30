 // Load express
 const express = require('express');
 
 // Create our express app
 const app = express();
 
 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', function (req, res) {
   res.send('<h1>Hello World!</h1>');
 });

app.get('/madonna', function(req,res) {
     res.send("<h1>These are madonnas</h1>")
})

app.get('/madonna90s', function(req,res) {
    //res.redirect('http://google.com')
    //res.send('sorry madonna doesnt exist past the 90s')
    res.render('madonna.ejs', {})
})

app.get('/madonna80s', function(req,res) {
    res.send("<h1>These are madonnas greatest hits</h1>")
})

// this route handler a POST request
app.post('/submit', function(req,res) {
    res.send("Thank you for submitting stuff")
})


 
 // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function () {
   console.log('Listening on port 3000');
 });

