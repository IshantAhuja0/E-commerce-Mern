import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: Number,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
    },
    country: {
      type: String,
      enum: ["India", "USA", "UK", "Australia", "Russia"],
      default: "India",
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Address", addressSchema);
