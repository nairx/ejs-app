import * as productService from "../services/productServices.js"


const homePage = async (req,res) => {
     const products = await productService.displayProducts()
    res.render("products/index",{products})
}

const createProduct = async (req,res) => {
    const product = await productService.createProduct(req.body)
    res.redirect("/products")
}

const displayProducts = async (req,res) => {
    const products = await productService.displayProducts()
    res.render("products/list",{products})
}

const deleteProduct = async (req,res) => {
    const id = req.params.id
    const product = await productService.deleteProduct(id)
    res.redirect("/products")
    
}

const updateForm = async (req,res) => {
    const id = req.params.id
    const product = await productService.getProduct(id)
    res.render("products/edit",{product})
}

const saveProduct = async (req,res) => {
    const id = req.params.id
    const body = req.body
    const product = await productService.saveProduct(id,body)
    res.redirect("/products")
}

const productDetails = async (req,res) => {
    const id = req.params.id
    const product = await productService.getProduct(id)
    res.render("products/details",{product})
}

export {createProduct,displayProducts,homePage,deleteProduct,updateForm,saveProduct,productDetails}