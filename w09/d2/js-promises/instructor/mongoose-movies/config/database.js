const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDB-sep28-2021',
{ useNewUrlParser: true, useCreateIndex: true }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});