import express from "express";
import { protect,adminOnly } from "../middleware/authmiddleware.js";
import { addproduct,getproduct,getproductbyid } from "../controller/productcontroller.js";

const router=express.Router()

router.get("/test", (req, res) => {
  res.send("Product route working ✅");
});
router.post("/addproduct",protect,adminOnly,addproduct)
router.get("/",getproduct)
router.get("/:id",getproductbyid)
export default router