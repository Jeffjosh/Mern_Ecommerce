import express from "express";
import { protect,adminOnly } from "../middleware/authmiddleware.js";
import { addproduct } from "../controller/productcontroller.js";

const router=express.Router()


router.post("/addproduct",protect,adminOnly,addproduct)

export default router