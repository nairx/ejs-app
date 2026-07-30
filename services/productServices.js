import productModel from "../models/productModel.js"

const createProduct = async (productData) => {
    return await productModel.create(productData)
}

const displayProducts = async () => {
    return await productModel.find()
}

const deleteProduct = async (id) => {
    return await productModel.findByIdAndDelete(id)
}

const getProduct = async (id) => {
    return await productModel.findOne({ _id: id })
}

const saveProduct = async (id,body) => {
    return await productModel.findByIdAndUpdate(id,body)
}


export { createProduct, displayProducts, deleteProduct,getProduct,saveProduct }