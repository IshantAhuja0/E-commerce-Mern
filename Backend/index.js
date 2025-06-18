require('dotenv').config()
const express=require("express")
const app=express()
const port=process.env.PORT||3000
app.get("/",(req,res)=>{
  res.send("backend ecommerce")
  })
  app.listen(port,()=>{
    console.log("server running at port : "+port)
  })