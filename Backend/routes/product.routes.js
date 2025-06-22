import  {Router} from "express"
import { getProduct,addProduct, uploadImages } from "../controllers/product.controller"
import { upload } from "../middlewares/multer"
const router=Router()
router.route("/getproduct").get(getProduct)
router.route("/addproduct").post(upload.array("images", 5), addProduct); // max 5 images
router.route("/uploadImages").post(upload.array("images", 5),uploadImages); // max 5 images


