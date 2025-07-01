import Address from "../models/address.model.js";
import userModel from "../models/user.model.js";

const addAddress=async(req,res)=>
{
    const userId=req.user._id
const {fullname, mobile_number,city,state,pincode,country,street,isDefault}=req.body;
if(!fullname || !mobile_number || !city || !state || !pincode  || !street)
    return res.status(400).json({message:"All fields are required"});
try{
const result=await Address.findOne({userId,street,city,state,pincode})
if(result)
    return res.status(409).json({message:"This address already exists"});
if(isDefault)
{
await Address.updateMany({userId},{$set: {isDefault:false}})
}
const newAddress=await Address.create({userId,fullname,mobile_number,street,city,state,pincode,country:country||"India",isDefault})
return res.status(201).json({message:isDefault?"Address is saved and added as default":"Addtess is saved",address:newAddress})
}
catch(err)
{
    return res.status(501).json({message:"Error Occured while adding address",error:err.message})
}
}

const deleteAddress=async(req,res)=>
{
    const {addressid}=req.params;
    const userId=req.user._id;
    try{
        const del =await Address.findByIdAndDelete(addressid,userId)
        if(!del)
        {
            return res.status(401).json({message:"Address not Found"});
        }
        else
        return res.status(201).json({message:"Address Deleted!"})
    }
    catch(err)
    {
return res.status(501).json({message:"Error Occured while Deleting Address", error:err.message})
    }
}

const updateAddress=async(req,res)=>
{
    const {addressid}=req.params;
    const update=req.body
    try
    {
         const address = await Address.findOne({ _id: addressid, userId });
    if (!address) {
      return res.status(403).json({ message:"This address doesn't belong to you"});
    }
        const result=await Address.findByIdAndUpdate(addressid,update,{new:true})
        if(result)
            return res.status(201).json({message:"Address Updated!"})
    }
catch(err)
{
    return res.status(500).json({message:"Error occured while updating address",error:err.message})
}
}

const allAddress=async(req,res)=>
{
    const userId=req.user._id;
    try
    {
        const result=await Address.find({userId})
        if(result)
            return res.status(201).json({result}) 
    }
    catch(err)
    {
        return res.status(501).json({message:"error occured",error:err.message})
    }
}

export  {addAddress,deleteAddress,updateAddress,allAddress}