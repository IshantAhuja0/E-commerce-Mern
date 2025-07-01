import express from "express";
import { login, register,getProfile,deleteProfile, updateProfile ,logout}  from '../controllers/user.controller.js';
import { loginLimiter } from "../middlewares/rateLimiter.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=express.Router();

router.post('/login',loginLimiter,login);
router.post('/register',register);
router.get('/profile',verifyJWT,getProfile);
router.delete('/deleteprofile',verifyJWT,deleteProfile);
router.put('/updateprofile',verifyJWT,updateProfile);
router.post('/logout',logout)
export default router;

