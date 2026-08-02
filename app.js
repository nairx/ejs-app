import express from "express"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
import orderRouter from "./routes/orderRoutes.js"
import expressLayouts from "express-ejs-layouts"
import { authenticate, authorize } from "./middleware/auth.js"
import session from "express-session"
import path from "path"

const app = express()

app.use(expressLayouts)

app.set("view engine", "ejs")
app.set("layout", "layout")

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use(session({
    secret: "mysecretkey",
    resave: false, // if true session is saved on every request even if there is no change
    saveUninitialized: false  // if true a default cookie gets created automatically
}))

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    res.locals.user = req.session.user
    res.locals.cart = req.session.cart
    next()
})



// app.get("/", (req, res) => {
//     res.render("index")
// })
app.use("/", productRouter)
app.use("/users", userRouter)
app.use("/orders", orderRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.stack);
    res.status(statusCode);
    res.render("error", {
        title: "Error",
        statusCode,
        message: err.message || "Internal Server Error"
    });
})


export default app