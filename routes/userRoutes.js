import express from "express"
import { login, loginForm, register, registrationForm,logout } from "../controllers/userController.js"

const Router = express.Router()

Router.get("/login", loginForm)

Router.post("/login", login)

Router.get("/logout",logout)

Router.get("/register", registrationForm)
Router.post("/register", register)

export default Router