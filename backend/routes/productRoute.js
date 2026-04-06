import express from "express";
import { protect,adminOnly } from "../middleware/authmiddleware.js";
import { addproduct,getproduct,getproductbyid } from "../controller/productcontroller.js";

const router=express.Router()


router.post("/addproduct",protect,adminOnly,addproduct)
router.get("/",getproduct)
router.get("/:id",getproductbyid)
export default router