import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/index.js";
import { app } from './app.js';
//we have written connectDB as a async function and an async function always returns a promise so we should use .then() and .catch() to handle this promise
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000
    let server = app.listen(port, () => {
      console.log(`server is running at port :${port}`)
      console.log("🌐 Connecting to Redis:", process.env.UPSTASH_REDIS_REST_URL);
    })
    server.on("error", (err) => {
      console.log("error in connection to db in index.js file" + err);
    })
  })
  .catch((err) => console.log("mongo db connection failed in index.js/src file : " + err))
