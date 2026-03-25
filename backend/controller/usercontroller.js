import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registoruser=async(req,res)=>{
    try{
        const {name,email,password}=req.body

        const userexist=await User.findOne({email})
        if(userexist){
            return res.status(400).json({msg:"user already exist"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
        const user=await User.create({
            name,
            email,
            password:hashpassword
        })
        res.status(201).json({msg:"account created"})
    }catch(err){
        res.status(500).json({error:err.message})

    }
}

export const loginuser=async(req,res)=>{
    try{
        const {email,password}=req.body

        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({msg:"invalid email"})
        }
        const ismatch=await bcrypt.compare(password,user.password)

        if(!ismatch){
            return res.status(400).json({msg:"invalid password"})
        }

        const token=jwt.sign(
            {id:user._id},
            process.env.jwt_secret,
            {expiresIn:"1d"}
        )
        res.json({
            id:user._id,
            name:user.name,
            email:user.email,
            token
        })
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}