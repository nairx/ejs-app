import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

const createUser = async (userData) => {
    const hashedpwd = await bcrypt.hash(userData.password, 10)
    userData.password = hashedpwd
    return await userModel.create(userData)
}

export { createUser }