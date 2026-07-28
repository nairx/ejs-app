import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

const createUser = async (userData) => {
    const hashedpwd = await bcrypt.hash(userData.password, 10)
    userData.password = hashedpwd
    return await userModel.create(userData)
}
const showUsers = async () => {
    return await userModel.find()
}

const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id)
}
const getUser = async (id) => {
    return await userModel.findOne({ _id: id })
}

const saveUser = async (id, userData) => {
    return await userModel.findByIdAndUpdate(id, userData)
}
export { createUser, showUsers, deleteUser, getUser,saveUser }