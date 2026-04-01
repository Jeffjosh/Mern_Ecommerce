import Product from "../models/product.js";

export const addproduct= async(req,res)=>{
    try{
        const {name,price,description,image,countinstock}=req.body

        if(!name || !price || !description || !image || !countinstock){
            return res.status(400).json({msg:"All fields are required"})
        }

        const product=await Product.create({
            name,
            price,
            description,
            image,
            countinstock,

        })
        res.status(201).json(product)

    }catch(err){
        res.status(500).json({error:err.massage})
    }

}