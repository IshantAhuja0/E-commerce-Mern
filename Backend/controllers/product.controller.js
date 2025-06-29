import asyncHandler from "../utils/asyncHandler.js"
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js"
import ApiError from "../utils/apiError.js"
import ApiResponse from "../utils/apiResponse.js"
import { Product } from "../models/product.model.js"
import { Category } from "../models/category.model.js"

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
    //i haven't tested or checked this part 
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  const validImages = files.filter(file => ALLOWED_TYPES.includes(file.mimetype));
  if (validImages.length !== images.length) {
    throw new ApiError(400, "Some files are not valid image types (jpg, png, webp only).");
  }
  
  if (!title || !price || !stock || !category) throw new ApiError(400, "title ,price,stock and category are required to add product")
  if (title.trim().length === 0 || price === 0 || stock === 0 || category.trim().length === 0) throw new ApiError(400, "title ,price,stock and category are required to add product and should not empty or 0")
  const isCategoryExists = await Category.findOne({ name: category.toLowerCase() })
  //category not exist ,so make a new category
  const myCategoryId = null
  if (!isCategoryExists) {
    const newCategory = await Category.create({
      title: category.toLowerCase(),
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

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body
  const userId = req.user?._id
  const product = await Product.findById(productId)
  if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
  if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to delete this product")
  let deleteImages = [];
  try {
    deleteImages = await Promise.all(
      product.images.map((image) =>
        deleteFromCloudinary(image.public_id, "image")
      )
    );
  } catch (err) {
    console.error("Error deleting images from Cloudinary:", err);
    throw new ApiError(500, "problem occures while deleting product images from cloudinary")
  }

  const result = await Product.deleteOne({ _id: product._id })
  if (!result.acknowledged || result.deletedCount !== 1) throw new ApiError(500, "problem occured while deleting product in server")
  return res.status(200).json(new ApiResponse(200, {}, "product deleted successfully"))

})

// const updateProductStock = asyncHandler(async (req, res) => {
//   const { productId, stock } = req.body
//   const userId = req.user?._id
//   const product = await Product.findById(productId)
//   if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
//   if (stock === undefined || stock < 0) throw new ApiError(400, "stock must be provide and not be negative")
//   if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this product")
//   const updatedProduct = await Product.findOneAndUpdate(
//     { _id: productId, owner: userId },
//     { $set: { stock } },
//     { runValidators: true, new: true }
//   );
//   if (!result.acknowledged || result.modifiedCount !== 1) throw new ApiError(500, "problem occured while updating stock of product in server")
//   return res.status(200).json(new ApiResponse(200, updatedProduct, "product stock updated successfully"))

// })

// const updateProductPrice = asyncHandler(async (req, res) => {
//   const { productId, price } = req.body
//   const userId = req.user?._id
//   const product = await Product.findById(productId)
//   if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
//   if (price === undefined || stock < 0) throw new ApiError(400, "price must be provide and not be negative")
//   if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this product")
//   const updatedProduct = await Product.findOneAndUpdate(
//     { _id: productId, owner: userId },
//     { $set: { price } },
//     { runValidators: true, new: true }
//   );
//   if (!result.acknowledged || result.modifiedCount !== 1) throw new ApiError(500, "problem occured while updating price of product in server")
//   return res.status(200).json(new ApiResponse(200, updatedProduct, "product price updated successfully"))

// })

const updateProduct = asyncHandler(async (req, res) => {
  const { productId, title, description, price, stock } = req.body
  const userId = req.user?._id
  const product = await Product.findById(productId)
  if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
  if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this product")
  if (!title && !description) throw new ApiError(400, "no parameters recieved to update for product")
  const update = {}
  if (title && title.trim().length !== 0) update.title = title
  if (description && description.trim().length !== 0) update.description = description
  if (stock !== undefined && stock >= 0) update.stock = stock
  if (price !== undefined && price >= 0) update.price = price
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: productId, owner: userId },
    { $set: update },
    { runValidators: true, new: true }
  );
  if (!result) throw new ApiError(500, "problem occured while updating stock of product in server")
  return res.status(200).json(new ApiResponse(200, updatedProduct, "product stock updated successfully"))
})

const deleteImages = asyncHandler(async (req, res) => {
  const userId = req.user?._id
  const { productId } = req.body
  const imagesToDelete = req.body.images
  const product = await Product.findById(productId)
  if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
  if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this product")
  if (imagesToDelete.length == 0 || imagesToDelete === undefined) throw new ApiError(400, "no images provided to delete")
  let imagesArray = product.images
  //filter pushes into result array if true is found in provided condition 
  //for every image in product.images we are using some to check if that exist in delArray and if yes then return false so filter recieves no to push that image
  const updatedImagesArray = imagesArray.filter(image =>
    !imagesToDelete.some(delImg => image.url == delImg.url)
  )
  try {
    const deleteImgCloudinary = await Promise.all(
      imagesToDelete.map(img => deleteFromCloudinary(img.public_id, "image"))
    )
  } catch (error) {
    throw new ApiError(500, "problem while deleting images from cloudinary")
  }
  const result = await Product.findByIdAndUpdate({ _id: product._id }, { $set: { images: updatedImagesArray } }, { runValidators: true, new: true })
  if (!result) throw new ApiError(500, "problem occured while deleting images")
  return res.status(200).json(new ApiResponse(200, result, "images deleted successfully"))
})

const uploadImages = asyncHandler(async (req, res) => {
  const userId = req.user?._id
  const { productId } = req.body
  const images = req.files.images
  const product = await Product.findById(productId)
  if (!product) throw new ApiError(400, "Invalid product id .product doesn't exist against provided productId")
  if (product.owner.toString() !== userId.toString()) throw new ApiError(400, "the user is not authorized to update this product")
  if (images === undefined || images.length === 0) throw new ApiError(400, "no images provided to upload")

  //i haven't tested or checked this part 
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  const validImages = images.filter(file => ALLOWED_TYPES.includes(file.mimetype));
  if (validImages.length !== images.length) {
    throw new ApiError(400, "Some files are not valid image types (jpg, png, webp only).");
  }

  if (product.images.length + images.length > 10) {
    const allowedImagesNo = 10 - product.images.length
    throw new ApiError(400, `your uploaded images exceed allowed no. of images to upload(10) ,you can now only add : ${allowedImagesNo}images or delete previous images first`)
  }
  const newImagesUploaded = await Promise.all(
    images.map(image => uploadOnCloudinary(image))
  )
  const newImages = newImagesUploaded.map((image) => (
    {
      url: image.secure_url,
      public_id: image.public_id
    }
  ))
  // const updatedImagesArray=product.images
  // newImages.map(image=>updatedImagesArray.push(image))
  const updatedImagesArray = [...product.images, ...newImages]
  const result = await Product.findByIdAndUpdate({ _id: product._id }, { $set: { images: updatedImagesArray } }, { runValidators: true, new: true })
  if (!result) throw new ApiError(500, "problem occured while uploading images")
  return res.status(200).json(new ApiResponse(200, result, "images uploaded successfully"))
})
export { getProduct, addProduct, deleteProduct, updateProduct, deleteImages, uploadImages }