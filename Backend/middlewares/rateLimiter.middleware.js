// loginLimiter.middleware.js

import dotenv from "dotenv";
dotenv.config();

import { Redis } from "@upstash/redis";

// ✅ Secure Redis client using environment variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  // url:'https://cute-adder-12147.upstash.io',
  // token: 'AS9zAAIjcDEwNzAxYWNkNTI3M2M0OTljYWZmM2Y2N2NkYzExYjE1YnAxMA'
});

export const loginLimiter = async (req, res, next) => {
  try {
    // ✅ Get client IP (safe fallback for proxies too)
    const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const key = `login_attempts:${ip}`;
    const maxAttempts = 5;
    const windowSec = 15 * 60; // 15 minutes

    // 🚀 Increment login attempts
    const attempts = await redis.incr(key);

    // 🕒 If first attempt, set expiry window
    if (attempts === 1) {
      await redis.expire(key, windowSec);
    }

    // 🚫 Block if max attempts exceeded
    if (attempts > maxAttempts) {
      return res.status(429).json({
        status: 429,
        message: "Too many login attempts. Please try again after 15 minutes.",
      });
    }

    // ✅ Allow request to proceed
    next();
  } catch (error) {
    console.error("❌ Redis login rate limit error:", error.message || error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error while rate limiting.",
    });
  }
};
