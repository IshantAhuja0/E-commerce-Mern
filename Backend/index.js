import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/index.js";
import { app } from './app.js';
import cors from "cors";
import express from "express";
import router from "./routes/user.routes.js";
//we have written connectDB as a async function and an async function always returns a promise so we should use .then() and .catch() to handle this promise
app.use(cors());
app.use(express.json());
app.use('/',router);
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000
    let server = app.listen(port, () => {
      console.log(`server is running at port :${port}`)
    }
    )
    server.on("error", (err) => {
      console.log("error in connection to db in index.js file" + err);
    })

  })
  .catch((err) => console.log("mongo db connection failed in index.js/src file : " + err))
