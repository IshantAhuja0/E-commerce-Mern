import asyncHandler from "../utils/asyncHandler.js"
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js"
import ApiError from "../utils/apiError.js"
import ApiResponse from "../utils/apiResponse.js"
import { Product } from "../models/product.model.js"

const getProduct = asyncHandler(async (req, res) => {
  const productId = req.params?.productId
  const productExist = await Product.exists({ _id: productId })
  if (!productExist) throw new ApiError(400, "product id not provided or no product exists against product id")
  const product = await Product.findById(productId)
  if (!product) throw new ApiError(401, "problem occured while fetching product")
  return res.status(200).json(new ApiResponse(200, product, "product fetched successfully"))
})

const addProduct = asyncHandler(async (req, res) => {
  const { title, description = "", price, stock, category } = req.body
  const files = req.files
  if (!files || files.length === 0) {
    return res.status(400).json(new ApiResponse(400, "At least one image is required."));
  }
  if (!title || !price || !stock || !category) throw new ApiError(400, "title ,price,stock and category are required to add product")
  if (title.trim().length === 0 || price === 0 || stock === 0 || category.trim().length === 0) throw new ApiError(400, "title ,price,stock and category are required to add product and should not empty or 0")
  const isCategoryExists = await Category.find({ name: category.toLowerCase() })
  //category not exist ,so make a new category
  const myCategoryId = null
  if (!isCategoryExists) {
    const newCategory = await Category.create({
      name: category.toLowerCase(),
      description: ""
    })
    myCategoryId = newCategory._id
  }
  else {
    myCategoryId = isCategoryExists._id
  }
  // upload images on cloudinary
  const uploadImages = await Promise.all(
    files.map((image) => uploadOnCloudinary(image.path))
  )
  const images = uploadImages.map((image) => ({
    url: image.secure_url,
    public_id: image.puclic_id
  }))
  if (!images) throw new ApiError(500, "problem occured while uploading images during add product")
  const newProduct = await Product.create({
    title,
    description,
    price,
    stock,
    images,
    categoryId: myCategoryId
  })
  if (!newProduct) throw new ApiError(500, "problem occured while adding product")
  return res.status(200).json(new ApiResponse(200, newProduct, "product added"))
})


export { getProduct, addProduct }