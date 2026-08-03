import * as orderService from "../services/orderServices.js"

const createOrder = async (req, res) => {
    if (req.session.user) {
        const order = await orderService.createOrder(req.session.user.id, req.session.cart)
        req.session.cart = null
        res.redirect("/orders/myorder")
    }
    else {
        res.redirect("/users/login")
    }

}

const myOrder = async (req, res) => {
    if (req.session.user) {
        const myorder = await orderService.myOrder(req.session.user.id)
        res.render("orders/order", { myorder })
    }
    else {
        res.redirect("/users/login")
    }

}

const orders = async (req,res) => {
    const orders = await orderService.orders()
    console.log(orders)
    res.render("orders/orders",{orders})
}

export { createOrder, myOrder,orders }