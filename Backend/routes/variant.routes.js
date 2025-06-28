import  {Router} from "express"
import { deleteVariant, getAllVarients, updateVariant } from "../controllers/varient.controller";
const router=Router()
router.route("/getvariants/:productId").get(getAllVarients)
router.route("/deletevariant").post(deleteVariant); 
router.route("/deleteimages").post(deleteImages); 
router.route("/updatevariant").post(updateVariant); 