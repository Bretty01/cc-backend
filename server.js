import express from "express"
import cors from "cors"
import productInfo from "./api/productinfo.js"
import userRouter from "./api/UserRouter.js";
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    credentials: true,
    origin: 'https://coveted-cow.onrender.com'}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1", productInfo)
app.use("/api/v1", userRouter)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))
export default app