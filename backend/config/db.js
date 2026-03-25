import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.mongodb_url)
        console.log("mongoDb connected");
        

    }catch(error){
        console.error("error connecting to mongoDB",error);
        process.exit(1)
        

    }
}
export default connectDB;