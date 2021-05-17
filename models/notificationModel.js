const mongoose=require('mongoose');
const User=require('./userModel')

const notificationSchema= mongoose.Schema({
    notificationDate:Date,
    title:String,
    description:String,
     destination:{
         type:mongoose.Schema.ObjectId,
         ref:User
     }
    
})

const Notification=mongoose.model('Notification',notificationSchema)
module.exports=Notification