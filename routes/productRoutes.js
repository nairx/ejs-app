import * as productController from "../controllers/productController.js"
import { authorize } from "../middleware/auth.js"
import express from "express"

const Router = express.Router()


Router.get("/", productController.homePage)

Router.get("/products/details/:id", productController.productDetails)


Router.get("/products", authorize("admin"), productController.displayProducts)

Router.get("/products/delete/:id", authorize("admin"), productController.deleteProduct)

Router.get("/products/update/:id", authorize("admin"), productController.updateForm)



Router.post("/products/update/:id", authorize("admin"), productController.saveProduct)

Router.post("/products", authorize("admin"), productController.createProduct)

export default Router