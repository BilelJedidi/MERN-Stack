const { JokesSchema, Jokes } = require('../models/jokes.model');

Model = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch((err) => console.log(err));}

module.exports.findOneSingleJoke = (req, res) => {
    const {params} = req
    Jokes.findOne( {_id: params._id} )
        .then(oneSingleJoke => {
            res.json(oneSingleJoke)
        })
        .catch((err) => console.log(err));}

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => {
            res.json(newlyCreatedJoke)
        })
        .catch((err) => console.log(err));}


module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json(updatedJoke)
        })
        .catch((err) => console.log(err));}


module.exports.deleteAJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => console.log(err));}

