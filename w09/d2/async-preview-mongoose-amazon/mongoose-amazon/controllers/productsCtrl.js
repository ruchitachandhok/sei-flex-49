const ProductModel = require('../models/product.js')

module.exports = {
    newProduct,
    handleForm,
    index,
    show
}

async function show(req, res) {
    console.log(req.params)
    res.send(req.params.id)
}

async function index(req, res) {
    // hit our DB for ALL products
    console.log(req.params)
    console.log('running index functionality')

    // // CALLBACK SYNTAX
    // ProductModel.find({}, function(err, results) {
    //     res.render('index.ejs', { title: 'Amazongoose', products: results})
    // })

    // // MONGOOSE EXEC SYNTAX
    // ProductModel.find({}).exec(function(err, results) {
    //     res.render('index.ejs', { title: 'Amazongoose', products: results })
    // })

    // ASYNC/AWAIT
    let results = await ProductModel.find({})
    console.log(results)
    res.render('index.ejs', { title: 'Amazongoose', products: results })

    // // PROMISE SYNTAX
    // ProductModel.find({}).then((err, results) => {
    //     res.render('index.ejs', { title: 'Amazongoose', products: results })
    // })


    // ProductModel.find({})
    // res.render('index.ejs', { title: 'Amazongoose'})
}

function newProduct(req,res) {
    //res.send('<form>Name:<input />Price:<input /></form>')
    res.render('new.ejs')
}
async function handleForm(req,res) {
    // req.body contains user form data
    let incomingFormData = req.body
    console.log(incomingFormData)

    // we create an object with keys
    //   matching our schema
    await ProductModel.create({
        productName: req.body.name,
        price: req.body.price,
    })
    res.redirect('/')
}

