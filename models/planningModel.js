const mongoose=require('mongoose');
const Intervention=require('./interventionModel');
const User=require('./userModel')

const planingSchema=  mongoose.Schema({
    date:Date,
    intervention:{
        type:mongoose.Schema.ObjectId,
        ref:'Intervention'
    },
    technicien:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }

})

const Planing=mongoose.model('Planing',planingSchema);
module.exports=Planing;