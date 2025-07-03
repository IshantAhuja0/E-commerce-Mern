import express from "express";
import { getOrCreateCart} from "../controllers/cart.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(verifyJWT);

//get cart
router.get("/get-or-create", getOrCreateCart);

// clear cart 
// router.delete("/clear", clearCart);

export default router;
