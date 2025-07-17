import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        googleId: {
            type: String, unique: true
        },
        mobile_number: {
            type: Number,
            unique: true
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            required: true,
            default:"user"
        },
        isVerified: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)
export const User = mongoose.model("User", userSchema)