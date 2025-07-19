import { Router } from "express";
import { addReview, deleteReview, getAllReviews, updateReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=Router()
router.use(verifyJWT)
router.route("/:productId")
.get(getAllReviews)
.delete(deleteReview)
.patch(updateReview)
.post(addReview)
export default router
