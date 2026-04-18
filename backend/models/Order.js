import mongoose from "mongoose";

const orderschema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    orderitems:[{
        name:String,
        price:Number,
        quantity:Number,
        image:String,
        productID:String
    }],
    totalprice:{
        type:Number,
        required:true
    }
},{timestamps:true}
)

const Order=mongoose.model("order",orderschema)
export default Order