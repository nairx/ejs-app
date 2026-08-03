import express from "express"
import * as orderController from "../controllers/orderController.js"
import { authenticate,authorize } from "../middleware/auth.js"

const Router = express.Router()

Router.get("/",authorize("admin"),orderController.orders)

Router.get("/myorder",orderController.myOrder)

Router.post("/createorder",orderController.createOrder)

export default Router