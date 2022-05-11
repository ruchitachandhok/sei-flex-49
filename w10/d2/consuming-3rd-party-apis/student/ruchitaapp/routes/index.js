var express = require("express");
var router = express.Router();
var router = express.Router();

const axios = require("axios").default;

/* GET home page. */
router.get("/", async function (req, res, next) {
  const username = req.query.username1; //query paramters
  console.log("the user sent us", username);

  let token = process.env.GITHUB_TOKEN //access one of our env variables

  //right-hand-side sends a message to githb API.
  //left-hand-side stores the response.
  try {

    let obj = {
      headers: {
        'User-Agent': 'ruchitachandhok',
        Authorization: `token ${token}`,
      }
    }
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log("We talked to github and GH said", response.data);

    res.render("index.ejs", { title: "Express", data: response.data });
    
  } catch (err) {
    //res.send('there was an error')
    console.log("failed because of", err);
    //let data = { login: "", avatar_url:"",}
    res.render("index.ejs", { title: "Error" });
  }
});

module.exports = router;
