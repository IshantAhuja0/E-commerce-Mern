import  {Router} from "express"
import { getProduct,addProduct } from "../controllers/product.controller"
import { upload } from "../middlewares/multer"
const router=Router()
router.route("/getproduct").get(getProduct)
router.route("/addproduct").post(upload.array("images", 5), addProduct); // max 5 images


