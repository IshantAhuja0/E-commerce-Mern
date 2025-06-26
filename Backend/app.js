import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes imports
import router from "./routes/user.routes.js";
// routes declaration
app.get("/",(req,res)=>{
  res.send("all good in server")
})
app.use('/api/users',router);

export {app};