import express from "express";
import { login, register,getProfile,deleteProfile, updateProfile ,logout}  from '../controllers/user.controller.js';
import { loginLimiter } from "../middlewares/rateLimiter.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=express.Router();
import { sendTokenResponse } from "../controllers/auth.controller.js";
import passport from "passport";


// 👇 Start Google login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// 👇 Handle callback and issue JWT
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  sendTokenResponse
);
router.post('/login',loginLimiter,login);
router.post('/register',register);
router.get('/profile',verifyJWT,getProfile);
router.delete('/deleteprofile',verifyJWT,deleteProfile);
router.put('/updateprofile',verifyJWT,updateProfile);
router.post('/logout',logout)
export default router;

