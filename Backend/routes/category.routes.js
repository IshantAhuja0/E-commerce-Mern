import { Router } from "express";
import { addCategory, deleteCategory, getAllCategories, getAllSubCategories } from "../controllers/category.controller.js";
const router=Router()
router.route("/getallcategories").get(getAllCategories)
router.route("/getsubcategories").post(getAllSubCategories)
router.route("/deletecategory").post(deleteCategory)
router.route("/addcategory").post(addCategory)
export default router