const Product = require("../models/product.model")





//!-------CRUD

// READ ALL
module.exports.findALLProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({ allProducts })
        })
        .catch(err => res.json({ message: "There is an ERROR", error: err }))
}

// CREATE

module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ newProduct })
        })
        .catch(err => res.json({ message: "wait a minute 😏😏", error: err }))
}


// Find One

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.status(200).json({
            oneProduct
        })
        ).catch(err => { res.status(400).json({ message: "wait a minute 😏😏", error: err }) })
}

// Update
module.exports.updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => { res.json({ updatedProduct }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}