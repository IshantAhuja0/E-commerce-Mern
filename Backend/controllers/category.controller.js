import mongoose from "mongoose"
import { Category } from "../models/category.model.js"
import ApiError from "../utils/apiError.js"
import ApiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/apiResponse.js"
//get all parent categories in which parentCategory===null
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ parentCategory: null })
  if (!categories || categories.length === 0) throw new ApiError(500, "problem while fetching categories")
  return res.status(200).json(200, categories, "fetched all categories successfully")
})

//get all sub-categories in which parentCategory===input
const getAllSubCategories = asyncHandler(async (req, res) => {
  const { categoryId } = req.params
  if (!categoryId || ! await Category.exists({ _id: categoryId })) throw new ApiError(400, "A valid category ID must be provided to fetch sub-categories.")
  const categories = await Category.find({ parentCategory: categoryId })
  if (!categories || categories.length === 0) return res.status(200).json(ApiResponse(200, [], "No subcategories found against provided category"))
  return res.status(200).json(200, categories, "fetched all categories successfully")
})

const deleteCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.body
  const category = await Category.findById(categoryId)
  if (!category) throw new ApiError(400, "Invalid category id .category doesn't exist against provided categoryId")
  let deleteImages = [];
  try {
    deleteImages = await Promise.all(
      category.images.map((image) =>
        deleteFromCloudinary(image.public_id, "image")
      )
    );
  } catch (err) {
    console.error("Error deleting images from Cloudinary:", err);
    throw new ApiError(500, "problem occures while deleting category images from cloudinary")
  }

  const result = await Category.deleteOne({ _id: category._id })
  if (!result.acknowledged || result.deletedCount !== 1) throw new ApiError(500, "problem occured while deleting category in server")
  return res.status(200).json(new ApiResponse(200, {}, "category deleted successfully"))

})

const addCategory = asyncHandler(async (req, res) => {
  const { title, description = "",slug } = req.body
  const files = req.files
  // if (!files || files.length === 0) {
  //   return res.status(400).json(new ApiResponse(400, "At least one image is required."));
  // }
  //i haven't tested or checked this part 
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  const validImages = files.filter(file => ALLOWED_TYPES.includes(file.mimetype));
  if (validImages.length !== files.length) {
    throw new ApiError(400, "Some files are not valid image types (jpg, png, webp only).");
  }

  if (!title || title.trim().length === 0 || slug.trim().length===0) throw new ApiError(400, "title and slug is required to add category")
  const isCategoryExists = await Category.find({ title: title.toLowerCase() })
  if (isCategoryExists || isCategoryExists.length > 0) throw new ApiError(400, "category with same name already exists. rename or use existing ones")
  //category not exist ,so make a new category
  // upload images on cloudinary
  const uploadImages = await Promise.all(
    files.map((image) => uploadOnCloudinary(image.path))
  )
  const images = uploadImages.map((image) => ({
    url: image.secure_url,
    public_id: image.puclic_id
  }))
  if (!images) throw new ApiError(500, "problem occured while uploading images during add product")
  const newCategory = await Category.create({
    title,
    description,
    images,
    slug
  })
  if (!newCategory) throw new ApiError(500, "problem occured while adding category")
  return res.status(200).json(new ApiResponse(200, newCategory, "category added"))
})
export { getAllCategories, getAllSubCategories, deleteCategory, addCategory }
