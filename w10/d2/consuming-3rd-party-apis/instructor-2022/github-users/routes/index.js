var express = require('express');
var router = express.Router();
// requiring the axios library which lets us talk (send HTTP Requests) to other servers
const axios = require('axios').default;

/* GET home page. */
router.get('/', async function(req, res, next) {

  const username = req.query.username1; // handle incoming query parameters

  // right-hand-side sends a message to github API
  // left-hand-side stores the response
  try {

    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log("we talked to github and GH said", response.data)
    res.render('index.ejs', { title: 'Express', data: response.data, });

  } catch(err) { // if there's an error the catch block triggers

    console.log("failed")
    let data = { login: "", avatar_url: "",} // empty data object to make .ejs happy as ejs expects a data.login and a data.avatar_url
    res.render('index.ejs', { title: 'Error', data })
  }

});

module.exports = router;
