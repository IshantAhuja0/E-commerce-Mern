const mongoose=require('mongoose');
const addressSchema=new mongoose.Schema(
    {
street:
{
type:String,
required:true
},
city:
{
    type:String,
    required:true
},
state:
{
    type:String,
    required:true
},
postalcode:
{
    type:Number
},
isDefault:
{
    type:Boolean
},
    },
    {
        timestamps:true
    }
)
const Address=mongoose.model('Address',addressSchema);
export default Address;