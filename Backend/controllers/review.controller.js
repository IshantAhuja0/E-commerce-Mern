import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/apiResponse.js"
import ApiError from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {Product} from "../models/product.model.js"
import { Review } from "../models/review.modal.js"
const addReview = asyncHandler(async (req, res) => {
  const productId = req.params?.productId
  const userId = req.user?._id
  let { comment, rating } = req.body
  rating = parseInt(rating)
  if (!userId || !await User.exists({ _id: userId })) throw new ApiError(400, "user must be logged in to post a review")
  if (!productId || !await Product.exists({ _id: productId })) throw new ApiError(400, "invalid product id given to post review")
  if (rating == null || isNaN(rating) || rating < 0 || rating > 5)
    throw new ApiError(400, "Rating is required and can only range from 0 to 5")
  comment = comment.trim()
  if (comment.length === 0) throw new ApiError(400, "Comment cannot be empty");
  //check for duplicate Review
  const isExistingReview = await Review.findOne({ userId, productId })
  if (isExistingReview) throw new ApiError(400, "review for same product from same user already exists . no duplicate reviews allowed")
  const result = await Review.create({
    userId,
    productId,
    rating,
    comment
  })
  if (!result) throw new ApiError(500, "problem occured while posting review")
  return res.status(201).json(new ApiResponse(201, result._id, "review posted successfully"))
})

const getAllReviews = asyncHandler(async (req, res) => {
  const productId = req.params.productId
  if (!productId || !await Product.exists({ _id: productId })) throw new ApiError(400, "product id is required to get reviews and must be valid")
  const result = await Review.find({ productId }).populate("userId", "name avatar");
  if (result.length === 0) return res.status(200).json(new ApiResponse(200, [], "the product has no reviews"))
  return res.status(200).json(new ApiResponse(200, result, "fetched product reviews successfully"))
})

const deleteReview = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;
  const { reviewId } = req.body;

  const review = await Review.findOne({ _id: reviewId, productId, userId });
  if (!review) throw new ApiError(400, "No review exists from this user against the provided product");

  await Review.findByIdAndDelete(reviewId);

  return res.status(200).json(new ApiResponse(200, null, "Review deleted successfully"));
})

const updateReview = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;
  let { reviewId, comment, rating } = req.body;
  if (!rating && !comment) throw new ApiError(400, "rating or comment must be provided to update review")
  const updates = {}
  if (comment && comment.trim().length !== 0) {
    updates.comment = comment.trim()
  }
  if (rating!==undefined ) {
    rating = parseInt(rating)
    if (isNaN(rating) || rating < 0 || rating > 5) throw new ApiError(400, "rating must be number and range from 0 to 5")
    updates.rating = rating
  }

  const review = await Review.findOne({ _id: reviewId, productId, userId });
  if (!review) throw new ApiError(400, "No review exists from this user against the provided product");

  const result = await Review.findByIdAndUpdate(reviewId, updates, { new: true, runValidators: true })
  if (!result) throw new ApiError(500, "problem occured while updating review")
  return res.status(200).json(new ApiResponse(200, result, "review updated successfully"))

})

export { addReview, getAllReviews, deleteReview, updateReview }