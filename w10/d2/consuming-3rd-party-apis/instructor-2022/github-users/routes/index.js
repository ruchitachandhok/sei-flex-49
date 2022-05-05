var express = require('express');
var router = express.Router();
// requiring the axios library which lets us talk (send HTTP Requests) to other servers
const axios = require('axios').default;

/* GET home page. */
router.get('/', async function(req, res, next) {

  const username = req.query.username1; // handle incoming query parameters

  let token = process.env.GITHUB_TOKEN // access one of our env variables

  // right-hand-side sends a message to github API
  // left-hand-side stores the response
  try {

    let obj = {
      headers: {
        'User-Agent': 'alexanderghose',
        Authorization: `token ${token}`,
      }
    }
    const response = await axios.get(`https://api.github.com/users/${username}`, obj)
    console.log("we talked to github and GH said", response.data)
    res.render('index.ejs', { title: 'Express', data: response.data, });

  } catch(err) { // if there's an error the catch block triggers
    
    console.log("failed")
    res.render('index.ejs', { title: 'Error'})
  }

});

module.exports = router;
