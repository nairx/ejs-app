import * as productController from "../controllers/productController.js"
import express from "express"

const Router = express.Router()


Router.get("/", productController.homePage)

Router.get("/products", productController.displayProducts)

Router.get("/products/delete/:id", productController.deleteProduct)

Router.get("/products/update/:id", productController.updateForm)

Router.get("/products/details/:id", productController.productDetails)

Router.post("/products/update/:id", productController.saveProduct)

Router.post("/products", productController.createProduct)

export default Router