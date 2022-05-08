const Student = require('../models/student');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {

  console.log("req.user",req.user)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Student.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('students/index.ejs', { 
      user: req.user, // this is new
      students, 
      name: req.query.name, 
      sortKey 
    });
  });
}

async function addFact(req, res, next) {
  // if a non-logged-in person is adding a fact somehow,
  // redirect them elsewhere
  if (!req.user) {
    res.redirect('/auth/google')
  }
  // 1. find the person who is logged in
  let person = await Student.findById(req.user._id)

  //
  person.facts.push({
    text: req.body.text 
  })
  await person.save()

  res.redirect('/students')
}

function delFact(req, res, next) {

}
