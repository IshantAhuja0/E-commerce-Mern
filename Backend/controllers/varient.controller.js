import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/apiError";
import ApiResponse from "../utils/apiResponse";
import { Product } from "../models/product.model";
import { Variant } from "../models/variant.model";
import mongoose from "mongoose";
const getAllVarients = asyncHandler(async (req, res) => {
  const { productId } = req.params || req.body
  if (!productId || !await Product.exists({ _id: productId })) throw new ApiError(400, "product id is required to get variants.")
  const result = await Variant.find({ productId })
  if (!result || result.lenght === 0) throw new ApiError(404, "no variant found against provided product")
  return res.status(200).json(new ApiResponse(200, result, "fetched all variant of product successfully"))
})
const deleteVariant = asyncHandler(async (req, res) => {
  const { productId } = req.params || req.body
  const { variantId } = req.params || req.body
  const userId = req.user
  if (!productId || !await Product.exists({ _id: productId })) throw new ApiError(400, "product id is required to delete variants.")
  if (!variantId || !await Variant.exists({ _id: variantId })) throw new ApiError(400, "variant id is required to delete variants.")
  if (!userId || ! await User.exists({ _id: userId })) throw new ApiError(400, "user need to be login to update or delete variant.Invalid userId")
  const fullProduct = await Variant.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(variantId)
      }
    },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "productDetails",
        //sub-pipeline in product
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
            }
          },
          {
            $unwind: {
              path: "$owner",
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $project: {
              _id: 1,

              owner: {
                _id: 1,
                name: 1,
                email: 1,
                role: 1
              },
              
              categoryId: 1,
              title: 1
            }
          }
        ]
      }
    },
    {
      $unwind: {
        path: "$productDetails",
        preserveNullAndEmptyArrays: true // Keep variant if no product found
      }
    },
    {
      $project: {
        _id: 1, // Optional: exclude Variant _id
        productId: "$productDetails._id",
        owner: "$productDetails.owner",
        categoryId: "$productDetails.categoryId",
        title: "$productDetails.title"
      }
    }
  ]);
  if (!fullProduct || fullProduct.length === 0) throw new ApiError(404, "no product found against provided varient id")
  const resultProductDetail = fullProduct[0]
  if (userId.toString() !== resultProductDetail.owner._id.toString()) throw new ApiError(401, "the user is not authorized to delete this product variant")
  const result = await Variant.deleteOne({ _id: variantId })
  if (!result.acknowledged || result.deletedCount === 0) throw new ApiError(500, "failed to delete variant from product .Internal server error")
 return res.status(200).json(new ApiResponse(200,result,"deleted variant from product successfully"))
})
const updateVariant = asyncHandler(async (req, res) => {
  const { variantId, color, size, price, stock } = req.body
  const userId = req.user?._id
  const variant = await Variant.findById(variantId)
  const product= await Product.findById(variant.productId)
  if (!variant ) throw new ApiError(400, "Invalid variant id .variant doesn't exist against provided variantId")
  if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this variant")
  if (!color && !price && !size && !stock) throw new ApiError(400, "no parameters recieved to update for variant")
  const update = {}
  if (color && color.trim().length !== 0) update.color = color
  if (size && size.trim().length !== 0) update.size = size
  if (stock !== undefined && stock >= 0) update.stock = stock
  if (price !== undefined && price >= 0) update.price = price
  const updatedVariant = await Variant.findOneAndUpdate(
    { _id: variantId},
    { $set: update },
    { runValidators: true, new: true }
  );
  if (!result) throw new ApiError(500, "problem occured while updating stock of variant in server")
  return res.status(200).json(new ApiResponse(200, updatedVariant, "product variant stock updated successfully"))
})
const addVariant = asyncHandler(async (req, res) => {
  const { color, size, price, stock, productId } = req.body;

  if (!color?.trim() || !size?.trim() || price <= 0 || stock <= 0) {
    throw new ApiError(400, "Color, size, price, and stock are required and must be valid");
  }

  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(400, "No product exists for the provided productId");
  }

  const newVariant = await Variant.create({
    color,
    size,
    price,
    stock,
    productId,
  });

  if (!newVariant) {
    throw new ApiError(500, "Problem occurred while adding variant");
  }

  return res.status(200).json(new ApiResponse(200, newVariant, "Variant added successfully"));
});

export { getAllVarients, deleteVariant, updateVariant, addVariant }