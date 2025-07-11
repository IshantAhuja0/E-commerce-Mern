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

  res.redirect("http://localhost:3000"); // or send JSON instead
};
