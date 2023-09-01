const mongoose = require('mongoose')


const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})

module.exports.Jokes = mongoose.model("joke", JokesSchema)