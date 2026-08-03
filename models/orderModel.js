import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    items: [Object],
    orderValue: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "Pending" }
}, { timestamps: true }
)

export default mongoose.model("Order", orderSchema)