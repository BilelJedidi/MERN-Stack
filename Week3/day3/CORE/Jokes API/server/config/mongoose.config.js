const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Jokes")
    .then(()=> console.log("Connected ya behi"))
    .catch((err)=> console.log("ERROR habibi", err))