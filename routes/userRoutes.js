import express from "express"
import * as userController from "../controllers/userController.js"

const Router = express.Router()

Router.get("/login", userController.loginForm)

Router.post("/login", userController.login)

Router.get("/logout", userController.logout)

Router.get("/register", userController.registrationForm)
Router.post("/register",userController.register)

Router.post("/create",userController.createUser)

Router.post("/save/:id",userController.saveUser)

Router.get("/update/:id",userController.getUser)

Router.get("/", userController.showUsers)

Router.get("/delete/:id", userController.deleteUser)

export default Router