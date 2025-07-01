import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import passport from "passport";
import "./config/passport.js";
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
app.use(passport.initialize());
// routes imports
import router from "./routes/user.routes.js";
// import authRoutes from "./routes/"
// routes declaration
app.get("/",(req,res)=>{
  res.send("all good in server")
})
// app.use("/auth", authRoutes);
app.use('/api/users',router);

export {app};