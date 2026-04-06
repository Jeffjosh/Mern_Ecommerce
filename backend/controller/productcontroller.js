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

export const getproduct=async(req,res)=>{
    try{
        const products=await Product.find()
        res.json(products)
    }catch(err){
        res.status(500).json({error:err.message})

    }
}

export const getproductbyid=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        res.json(product)
    }catch(error){
        res.status(500).json({error:err.message})
    }
}