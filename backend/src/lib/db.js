import mongoose from "mongoose";

export async function connectDB(){
    try{
        const mongouri=process.env.MONGO_URI;
        if(!mongouri){
            throw new Error("MONGO_URI is required");
        }
        const conn=await mongoose.connect(mongouri);
        console.log("MongoDB connected", conn.connection.host);
    }
    catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}