import * as productService from "../services/productServices.js"


const homePage = async (req,res) => {
    res.render("index")
}

const createProduct = async (req,res) => {
    const product = await productService.createProduct(req.body)
    res.redirect("/products/list")
}

const displayProducts = async (req,res) => {
    const products = await productService.displayProducts()
    res.render("products/list",{products})
}

export {createProduct,displayProducts,homePage}