import express from "express"
import * as orderController from "../controllers/orderController.js"

const Router = express.Router()

Router.get("/",orderController.orders)

Router.get("/myorder",orderController.myOrder)

Router.post("/createorder",orderController.createOrder)

export default Router