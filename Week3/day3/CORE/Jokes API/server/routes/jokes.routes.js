const JokesControllers = require("../controllers/jokes.controller.js")

module.exports = (app) => {
    app.get("/api/jokes", JokesControllers.findAllJokes)
    app.post("/api/jokes", JokesControllers.createNewJoke)
    app.get("/api/jokes/:_id", JokesControllers.findOneSingleJoke)
    app.put("/api/jokes/:_id", JokesControllers.updateJoke)
    app.delete("/api/jokes/:_id", JokesControllers.deleteAJoke)
}

