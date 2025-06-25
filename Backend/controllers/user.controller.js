import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const register = async (req, res) => {
  const { name, email, password, mobile_number, role, isVerified } = req.body;

  if (!name || !email || !password || !mobile_number || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
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

    return res.status(200).json({
      message: "User Registered Successfully!",
      user: newUser,
    });
  } catch (err) {
    console.log(err); // ✅ move this before return
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
  const token = jwt.sign(
    { id: User._id, role: User.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000
  });
    try
    {
const user=await User.findOne({email})
if(!user)
    return res.status(401).json({message:"Invalid Email Address"})
const result=await bcrypt.compare(password, user.password)
if(!result)
    return res.status(400).json({message:"Incorrect Password"})
else
return res.status(200).json({message:"Login Successfully!",user:user})
    }
    catch(err)
    {
       return res.status(500).json({messge:"An error occured:",error:err.message})
       
    }
}
export  {login,register}