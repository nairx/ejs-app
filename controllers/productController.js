import * as productService from "../services/productServices.js"


const homePage = async (req, res) => {
    const products = await productService.displayProducts()
    res.render("products/index", { products })
}

const createProduct = async (req, res) => {
    const product = await productService.createProduct(req.body)
    res.redirect("/products")
}

const displayProducts = async (req, res) => {
    const products = await productService.displayProducts()
    res.render("products/list", { products })
}

const deleteProduct = async (req, res) => {
    const id = req.params.id
    const product = await productService.deleteProduct(id)
    res.redirect("/products")

}

const updateForm = async (req, res) => {
    const id = req.params.id
    const product = await productService.getProduct(id)
    res.render("products/edit", { product })
}

const saveProduct = async (req, res) => {
    const id = req.params.id
    const body = req.body
    const product = await productService.saveProduct(id, body)
    res.redirect("/products")
}

const productDetails = async (req, res) => {
    const id = req.params.id
    const product = await productService.getProduct(id)
    res.render("products/details", { product })
}

const addToCart = async (req, res) => {
    const id = req.params.id
    const cart = await productService.addToCart(id, req.body)
    // console.log(cart)
    req.session.cart = [...req.session.cart, cart]
    // console.log(cart)
    res.redirect("/products/cart")
}

const showCart = async (req, res) => {
    const cart = req.session.cart
    const orderValue = cart.reduce((total, item) => {
        return total + (item.price * Number(item.quantity));
    }, 0);
    res.render("products/cart", { cart, orderValue })
}
export { createProduct, displayProducts, homePage, deleteProduct, updateForm, saveProduct, productDetails, addToCart, showCart }