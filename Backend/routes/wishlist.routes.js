import express from "express"
import { addToWishlist, deletefromwishlist, getwishlist } from "../controllers/wishlist.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
 
const router=express.Router();
router.use(verifyJWT)
router.get("/getwishlist",getwishlist)
router.post("/addtowishlist",addToWishlist)
router.delete("/deletefromwishlist/:productId",deletefromwishlist)
export default router;
