const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:String,
    email:String
})
const user=new mongoose.model('User',userSchema);
module.exports=user