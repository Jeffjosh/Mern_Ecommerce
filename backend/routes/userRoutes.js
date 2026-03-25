import express from "express";
import { registoruser,loginuser } from "../controller/usercontroller.js";

const router=express.Router()
router.post("/register",registoruser)
router.post("/login",loginuser)

export default router