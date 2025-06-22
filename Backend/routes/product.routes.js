import  {Router} from "express"
import { getProduct,addProduct, uploadImages, deleteProduct, deleteImages, updateProduct } from "../controllers/product.controller"
import { upload } from "../middlewares/multer"
const router=Router()
router.route("/getproduct/:productId").get(getProduct)
router.route("/addproduct").post(upload.array("images", 5), addProduct); // max 5 images
router.route("/deleteproduct").post(deleteProduct); 
router.route("/deleteimages").post(deleteImages); // 
router.route("/updateproduct").post(updateProduct); // 
router.route("/uploadImages").post(upload.array("images", 5),uploadImages); // max 5 images


