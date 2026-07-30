import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()

const ADMIN_EMAIL=process.env.ADMIN_EMAIL
const ADMIN_PASSWORD=process.env.ADMIN_PASSWORD


const seedAdmin = async () => {
    const isAdmin = await userModel.findOne({ role: "admin" })
    if (!isAdmin) {
        const hashedPwd = await bcrypt.hash(ADMIN_PASSWORD, 10)
        await userModel.create({ name: "Admin", email: ADMIN_EMAIL, password: hashedPwd, role: "admin" })
        console.log("Super Admin Created")
    }
}

export default seedAdmin