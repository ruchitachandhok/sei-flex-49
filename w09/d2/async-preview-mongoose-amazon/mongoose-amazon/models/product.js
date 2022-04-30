// setup a product model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema - a checklist for what goes in to DB
const productSchema = new Schema({
    productName: String,
    price: Number,
})

// create a model & give it a name
module.exports = mongoose.model('Product', productSchema);