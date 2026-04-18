import jwt from "jsonwebtoken"

export const protect=async(req,res,next)=>{
    let token=req.headers.authorization

    if(token && token.startsWith("Bearer ")){
        try{
            token=token.split(" ")[1]
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded
            next()

        }catch(error){
            return res.status(401).json({msg:"token verification failed"})
        }
    }else{
        return res.status(404).json({msg:"no token found"})
    }
}

export const adminOnly=async(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        return res.status(403).json({msg:"unauthorized access"})
    }
}
// import jwt from 'jsonwebtoken'

// // verfiy token 

// export const protect = (req,res,next) =>{
//     let token =  req.headers.authorization

//     if (token && token.startsWith('Bearer')){
//         try{
//             token = token.split(" ")[1]
//             const decoded = jwt.verify(token,process.env.JWT_SECRET)
//             req.user = decoded
//             next()
//         }catch(error){
//             return res.status(401).json({msg:'Token verification failed'})
//         }
//     }else{
//         return res.status(404).json({msg:'No token found'})
//     }
// }

// // admin check
// export const adminOnly = (req,res,next)=>{
//     if (req.user && req.user.isAdmin ){
//         next()
//     }else{
//         return res.status(403).json({msg:"Unauthorized access"})
//     }
// }