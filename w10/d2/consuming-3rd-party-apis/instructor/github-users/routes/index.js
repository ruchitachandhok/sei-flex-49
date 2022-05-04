var express = require('express');
var router = express.Router();
const request = require('request');

const rootURL = "https://api.github.com/"
// this will grab the token from the .env file
const token = process.env.GITHUB_TOKEN
console.log("token", token)

router.get('/', function(req, res, next) {
  // get ahold of the username the user has typed
  const username = req.query.username
  const options = {
    url: `${rootURL}users/${username}`, // build request URL
    headers: {
      'User-Agent': 'alexanderghose',
      Authorization: `token ${token}`
    }
  }
  
  request(options, function(err, response, body) {
    // this JSON.parse method is the opposite of stringify
    // converts a JSON string into actual data structures
    //     - like objects and arrays
    body = JSON.parse(body)
    res.render('index', { title: 'Express', body:body, });
  })
});

module.exports = router;
