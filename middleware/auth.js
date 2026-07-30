
const authenticate = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect("/users/login")
    }
    next()
}

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.redirect("/users/login")
        }
        if (!roles.includes(req.session.user.role)) {
            return res.redirect("/users/login")

        }
        next()
    }
}

export {authenticate,authorize}