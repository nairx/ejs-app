import app from "./app.js";
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import seedAmin from "./config/seedAdmin.js"



dotenv.config()

const PORT = process.env.PORT

const startServer = async () => {
    await dbConnect()
    await seedAmin()
    app.listen(PORT, () => console.log("Server Started"))
}

startServer()