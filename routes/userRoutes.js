import express from "express"
import { authenticate,authorize } from "../middleware/auth.js"

import * as userController from "../controllers/userController.js"

const Router = express.Router()

Router.get("/login", userController.loginForm)

Router.post("/login", userController.login)

Router.get("/logout", userController.logout)

Router.get("/register", userController.registrationForm)

Router.post("/register",userController.register)


Router.post("/create",authorize("admin"),userController.createUser)

Router.post("/save/:id",authorize("admin"),userController.saveUser)

Router.get("/update/:id",authorize("admin"),userController.getUser)

Router.get("/", authorize("admin"),userController.showUsers)

Router.get("/delete/:id",authorize("admin"), userController.deleteUser)

export default Router