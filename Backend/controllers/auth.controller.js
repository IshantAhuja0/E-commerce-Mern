import dotenv from "dotenv"
dotenv.configDotenv()
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const sendTokenResponse = (req, res) => {
  const token = generateToken(req.user);

  // Option 1: Send token as cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
const frontendUrl=process.env.frontendUrl || "http://localhost:5173"
  res.redirect(frontendUrl); // or send JSON instead
};
