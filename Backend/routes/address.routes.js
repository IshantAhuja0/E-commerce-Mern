import express from "express";
import {allAddress,addAddress,deleteAddress,updateAddress }  from '../controllers/address.controller.js';
import {verifyJWT} from "../middlewares/auth.middleware.js"
const addroute=express.Router();
addroute.get("/",verifyJWT,allAddress);
addroute.post("/add",verifyJWT,addAddress)
addroute.put("/update/:addressid",verifyJWT,updateAddress)
addroute.delete("/delete/:addressid",verifyJWT,deleteAddress)
export default addroute;

