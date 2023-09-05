const ProductControllers = require("../controllers/product.controller")


module.exports = (app) => {
    app.get("/api/product", ProductControllers.findALLProducts)
    app.post("/api/product", ProductControllers.newProduct)
    app.get("/api/product/:id", ProductControllers.findOneProduct)
    app.put("/api/product/:id", ProductControllers.updateOneProduct)
    app.delete("/api/product/:id", ProductControllers.deleteProduct)
}