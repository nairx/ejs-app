import orderModel from "../models/orderModel.js";

const createOrder = async (id, orderData) => {
    const orderValue = orderData.reduce((total, item) => {
        return total + (item.price * Number(item.quantity));
    }, 0);
    const order = {
        orderValue: orderValue,
        items: orderData,
        userId: id
    }
    
    return await orderModel.create(order)
}

const myOrder = async (userId) => {
    const myorder = await orderModel.find({ userId }).populate("userId")
    // console.log(myorder)
    return await myorder
}

const orders = async () => {
    return await orderModel.find()
}

export { createOrder, myOrder,orders }
