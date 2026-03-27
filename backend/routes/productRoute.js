import express from "express";
import { protect,adminOnly } from "../middleware/authmiddleware.js";

const router=express.Router()

const addproduct=(req,res)=>{
    res.json({msg:"product addedd successfully"})
}
router.post("/addproduct",protect,adminOnly,addproduct)

export default router