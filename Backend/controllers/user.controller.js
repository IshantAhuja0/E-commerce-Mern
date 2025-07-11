import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { Cart } from "../models/cart.model.js";
const register = async (req, res) => {
  const { name, email, password, mobile_number, role, isVerified } = req.body;

  if (!name || !email || !password || !mobile_number || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists! Try with some other Email ID",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      mobile_number,
      password: hashpassword,
      role,
      isVerified: isVerified || false,
    });

    // Create an empty cart for the new user
    try {
      const cart = await Cart.create({ userId: newUser._id });
      console.log("Cart created successfully for user:", newUser._id);
    } catch (cartErr) {
      console.error("Error while creating cart:", cartErr.message);
    }

    return res.status(200).json({
      message: "User Registered Successfully!",
      user: newUser,
    });

  } catch (err) {
    console.error("Registration Error:", err.message);
    return res.status(500).json({
      message: "An error occurred",
      error: err.message,
    });
  }
};
const login=async(req,res)=>
{
 const{email,password}=req.body;
 if(!email|| !password)
    {
   return res.status(400).json({message:"All fields are required"})
    }  
    try
    {
const user=await User.findOne({email})
if(!user)
    return res.status(401).json({message:"Invalid Email Address"})
const result=await bcrypt.compare(password, user.password)
if(!result)
    return res.status(400).json({message:"Incorrect Password"})
   const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  res.cookie("token", token, {
    httpOnly: false,
    secure: false,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000

  });
console.log("Token from cookie:", token);

return res.status(200).json({message:"Login Successfully!",user:user})
    }
    catch(err)
    {
       return res.status(500).json({messge:"An error occured:",error:err.message})
       
    }
}

const getProfile=async(req,res)=>
{
const userId=req.user._id;
try
{
const result=await User.findById(userId)
if(!result)
  return res.status(404).json("User not Found!")
else
return res.status(201).json({result})
}
catch(err)
{
  return res.status(500).json({message:"Error Occured",error:err.message})
}
}

const deleteProfile=async(req,res)=>
{
const userId=req.user._id;
  try{
  const result=await User.findByIdAndDelete(userId)
  if(!result)
return res.status(404).json("User not Found")
  else
  return res.status(200).json("Profile deleted Successfully!")
  }
  catch(err)
  {
  return res.status(500).json({message:"Error Occured",error:err.message})
  }
}

const updateProfile=async(req,res)=>
{
 const userId=req.user._id;
  const updates=req.body;
  try{
const result=await User.findByIdAndUpdate(userId,updates,{new:true})
return res.status(200).json({message:"Profile Updated SuccessFully!"})
  }
  catch(err)
  {
    return res.status(500).json({message:"Error Occured",error:err.message})
  }
}
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none"
  });

  return res.status(200).json({message: "Logged out successfully"});
};
export  {login,register,getProfile,deleteProfile,updateProfile,logout}