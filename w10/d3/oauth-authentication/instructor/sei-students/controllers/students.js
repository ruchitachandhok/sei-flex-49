const Student = require('../models/student');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log("the logged in user is", req.user)
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Student.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('students/index', { 
      students, 
      name: req.query.name, 
      sortKey,
      // req.user is how your server knows who is logged in
      user: req.user // req.user will be like {name:"eric",googleId:"123",cart:[],}
    });
  });
}

async function addFact(req, res, next) {
  if (!req.user) { // not authenticated user
     res.send('please Login') // <-- unauthenticated users must login
     return;
  }

   console.log("form data", req.body)
   //req.user is a reference to the user who's logged in
   // --> {name: "eric", email:"eric@eric.com", facts: []}
   req.user.facts.push({
     text: req.body.text
   })
   await req.user.save();
   res.redirect('/students')
}

function delFact(req, res, next) {

}
