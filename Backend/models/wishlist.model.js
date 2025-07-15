import mongoose,{Schema} from "mongoose";
import { User } from "./user.model.js";
import { Product } from "./product.model.js";

const wishlistSchema=new Schema({
user:
{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
},
products:
[{
    type:Schema.Types.ObjectId,
    ref:"Product"
    }]

},{timestamps:true})

export const Wishlist=mongoose.model("Wishlist",wishlistSchema)