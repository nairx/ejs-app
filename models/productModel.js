import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    imageUrl: { type: String }
})

export default mongoose.model("Product",productSchema)