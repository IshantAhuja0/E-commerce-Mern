import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
// // import passport from "passport";
import "./utils/passport.js";

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
// app.use(passport.initialize());
// routes imports
//import cartRoutes from "./routes/cart.routes.js";
import cartItemRoutes from "./routes/cartItem.routes.js";
import router from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import wishlist from "./routes/wishlist.routes.js"
import variantRouter from "./routes/variant.routes.js";
import categoryRouter from "./routes/category.routes.js";
import reviewRouter from "./routes/review.routes.js";
// routes declaration
app.get("/",(req,res)=>{
  res.send("all good in server")
})
app.use('/api/users',router);
app.use('/api/product',productRouter);

//cart routes
app.use("/api/cart-items", cartItemRoutes);

//wishlist routes
app.use("/api/wishlist",wishlist);

//varient
app.use("/api/variant",variantRouter)
app.use("/api/category",categoryRouter)
//review
app.use("/api/review",reviewRouter)
export {app};