
const authenticate = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }
    next()
}

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.redirect("/login")
        }
        if (!roles.includes(req.session.user.role)) {
            return res.redirect("/login")

        }
        next()
    }
}

export {authenticate,authorize}