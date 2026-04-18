import express from "express";
import { getmyorders,creatorder } from "../controller/Ordercontroller.js";
import {protect} from "../middleware/authmiddleware.js"

const router=express.Router()

router.post("/create",protect,creatorder)
router.get("/myorders",protect,getmyorders)

export default router