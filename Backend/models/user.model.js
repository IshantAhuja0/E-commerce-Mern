import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        name:{
 type:String,
 required:true,
        },
        email:
        {
            type:String,
            required:true,
            unique:true,
        },
        mobile_number:
        {
            type:Number,
            required:true,
            unique:true
        },
        password:
        {
            type:String,
           required:true,
        },
        role:{
            type:String,
            required:true
        },
        isVerified:
        {
            type:Boolean
        }
    },
    {
        timestamps:true
    }
)
export default mongoose.model("User",userSchema);
