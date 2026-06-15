import express from "express"
import cors from "cors"
import "dotenv/config"
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./lib/db.js";

const app=express()
const port=process.env.PORT
const FRONTEND_URL=process.env.FRONTEND_URL;
app.use(express.json())
app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware())

app.listen(port,()=>{
    connectDB();
    console.log("server is running on port: ",port)
});