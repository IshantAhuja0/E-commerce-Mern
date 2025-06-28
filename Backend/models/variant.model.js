import mongoose, { Schema } from "mongoose";
const variantSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    min: 0
    // required:true
  },
  //while adding variat we take price from product defaultly but if user need to give different price its would be okay
  stock: {
    type: Number,
    default: 0,
    min: 0,
    required: true
  },
}, { timestamps: true })

export const Variant=mongoose.model("Variant",variantSchema)