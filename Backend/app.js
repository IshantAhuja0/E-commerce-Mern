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
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import variantRouter from "./routes/variant.routes.js";


// routes declaration
app.get("/",(req,res)=>{
  res.send("all good in server")
})
app.use('/api/users',userRouter);
app.use('/api/product',productRouter);
app.use('/api/variant',variantRouter);

export {app};