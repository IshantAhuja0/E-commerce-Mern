import express from "express";
const router = express.Router();
import {verifyJWT} from "../middlewares/auth.middleware.js"
import { addOrderItems, getOrders } from "../controllers/order.controller.js";

router.route('/placeorder').post(verifyJWT,addOrderItems);
router.route('/getorders').get(verifyJWT,getOrders);
export default router;
