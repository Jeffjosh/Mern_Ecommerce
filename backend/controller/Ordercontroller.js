import Order from "../models/Order.js";

export const creatorder=async(req,res)=>{
    try{
        const {orderitems,totalprice}=req.body

        const order = await Order.create({
            user:req.user.id || "admin",
            orderitems,
            totalprice
        })
        res.status(201).json(order)

    }catch(error){
        res.status(500).json({message:"server error"})
    }
}

export const getmyorders=async(req,res)=>{
    try{
        const order=await Order.find({
            user:req.user.id
        })
        res.json(order)

    }catch(error){
        res.status(500).json({message:"server error"})
    }
}