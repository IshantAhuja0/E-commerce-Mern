import express from "express";
import {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem
} from "../controllers/cart_items.controller.js"; // These functions still reside in the same controller
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(verifyJWT);

//  Add item to cart
router.post("/add", addToCart);

//  Get all items in the cart
router.get("/items", getCartItems);

//  Update item quantity
router.put("/item/:cartItemId", updateCartItem);

// Remove item
router.delete("/item/:cartItemId", removeCartItem);

export default router;
