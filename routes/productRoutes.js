import * as productController from "../controllers/productController.js"
import express from "express"

const Router = express.Router()


Router.get("/",productController.homePage)

Router.get("/products",productController.displayProducts)

Router.post("/products",productController.createProduct)

export default Router