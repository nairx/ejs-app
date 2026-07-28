import userModel from "../models/userModel.js"
import * as userService from "../services/userServices.js"
import bcrypt from "bcrypt"

const registrationForm = (req, res) => {
    res.render("auth/register")
}

const register = async (req, res) => {
    const user = await userService.createUser(req.body)
    res.redirect("/users/login")

    // const hashedpwd = await bcrypt.hash(req.body.password, 10)
    // req.body.password = hashedpwd
    // const user = await userModel.create(req.body)

    // res.redirect("/auth/login")
}

const loginForm = (req, res) => {
    res.render("auth/login", { error: null })
}

const login = async (req, res) => {
    const { email, password } = req.body
    const found = await userModel.findOne({ email })
    if (found) {
        const chkPwd = await bcrypt.compare(password, found.password)
        if (chkPwd) {
            const user = {
                name: found.name,
                email: found.email,
                role: found.role
            }
            req.session.user = user
            res.redirect("/")
        }
    }
    else {
        res.render("login", { error: "User not found" })
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.locals.user = null
    res.redirect("/users/login")
}

export { login, loginForm, register, registrationForm, logout }
