import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

const registrationForm = (req, res) => {
    res.render("register")
}

const register = async (req, res) => {
    const hashedpwd = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedpwd
    const user = await userModel.create(req.body)
    res.redirect("/auth/login")
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

export { login, loginForm, register, registrationForm }
