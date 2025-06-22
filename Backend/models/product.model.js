import mongoose,{Schema} from "mongoose"
function arrayLimit(val) {
  return val.length>0
}
const productSchema=new Schema({
  categoryId:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  title:{
    type:String,
    trim:true,
    maxlength:100,
    required:true,
  },
  description:{
    type:String,
    trim:true,
    maxlength:1000,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    default:0,
    min:0
  },
  stock:{
    type:Number,
    required:true,
    default:0,
    min:0
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  images:{
    type:[{
    url:{
      type:String,
      required:true,
    },
    public_id:{
      type:String,
      required:true,
    },
  }],
validate:{
  validator:[arrayLimit],
  message:'At least one image is required'
}
}
},{timestamps:true})

productSchema.methods.isAvailable=async function(num) {
  if(this.stock<num)return false
  else return true
}

export const Product=mongoose.model("Product",productSchema)