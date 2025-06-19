import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import express from 'express'
const app=express()
const port=process.env.PORT||3000
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', // Or ['https://myapp.com', 'https://admin.myapp.com']
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // If using cookies or auth headers
}));
app.get("/",(req,res)=>{
  res.send("backend ecommerce")
  })
  app.listen(port,()=>{
    console.log("server running at port : "+port)
  })