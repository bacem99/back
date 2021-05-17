const mongoose= require('mongoose'); 
const Machine= require('./machineModel')
const User=require('./userModel')
const Planing = require('./planningModel');

const garageSchema= mongoose.Schema({
    nomGarage:{
        type:String,
        required:[true,"we need the cars'owner first name"]
    
    },
    telephone:Number,
    responsable:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    machines:[{
        type:mongoose.Schema.ObjectId,
        ref:'Machine'
    }],
    pays:String,
    ville:String,
    adresse:String ,
    planing:[{
         type:mongoose.Schema.ObjectId,
            ref:'Planing'
        
    }]
})
const Garage=mongoose.model('Garage',garageSchema);
module.exports=Garage


