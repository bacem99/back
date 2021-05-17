const User=require("./../models/userModel")


exports.GetClients=async (req,res,next)=>{
const query=await User.find({role:{$regex:"a"}});
res.status(200).json({
    status:"success",
    message:query

})
next();
 }

