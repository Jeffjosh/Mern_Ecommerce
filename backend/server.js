import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoute.js";
import oredrroutes from "./routes/Orderroutes.js";

dotenv.config();
connectDB()

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/orders",oredrroutes)


app.get("/",(req,res)=>{
    res.send("api is runneing")
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})