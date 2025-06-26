import express from "express";
import { login, register }  from '../controllers/user.controller.js';
import { loginLimiter } from "../middlewares/rateLimiter.middleware.js";

const router=express.Router();

router.post('/login',loginLimiter,login);
router.post('/register',register);

export default router;

