import productModel from "../models/productModel.js"

const createProduct = async (productData) => {
    return await productModel.create(productData)
}

const displayProducts = async () => {
    return await productModel.find()
}


export { createProduct, displayProducts }