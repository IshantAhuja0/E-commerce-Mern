import { Wishlist } from "../models/wishlist.model.js";
import { Product } from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";

//function to get wishlist
export const getwishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.findOne({ user: req.user }).populate("products")   //populate will work like aggregation it will fetch all the user related products
    if (!wishlist || wishlist.products.length === 0) {
        return res.status(200).json(new ApiResponse(200, [], "Your Wishlist is Empty."));
    }
    return res.status(200).json(new ApiResponse(200, wishlist, "Successfully fetched your wishlist"))
})

//function to add in wishlist
export const addToWishlist = asyncHandler(async (req, res) => {
    const { productId } = req.body
    if (!productId) throw new ApiError(400, "Product Id is Required")   //checking product Id 
    const product = await Product.findById(productId)
    if (!product) throw new ApiError(400, "Product not found")  //checking product

    //checking if user has already wishlist or not
    let userWishlist = await Wishlist.findOne({ user: req.user })
    if (!userWishlist) {

        userWishlist = await Wishlist.create({ user: req.user, products: [productId] });
        return res.status(200).json(
            new ApiResponse(200, userWishlist, "Product successfully added to your wishlist")
        );                                                                                  //create if dont have
    }
    if (userWishlist.products.includes(productId)) throw new ApiError(400, "Product already added in your wishlist")  //if product already added
    userWishlist.products.push(productId)
    await userWishlist.save();
    res.status(200).json(new ApiResponse(200, userWishlist, "Product Successfully added in your wishlist"))
})

//function to delete item from wishlist
export const deletefromwishlist = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const wishlist = await Wishlist.findOne({ user: req.user })
    if (!wishlist) throw new ApiError(400, "Wishlist not found")  //checking
    const productExists = wishlist.products.includes(productId);
    if (!productExists) {
        throw new ApiError(400, "Product not found in your wishlist");
    }
    wishlist.products.pull(productId)  //it will remove the product 
    await wishlist.save();
    return res.status(200).json(new ApiResponse(200, wishlist, "Product Successfully Deleted from Your Wishlist"))

})



