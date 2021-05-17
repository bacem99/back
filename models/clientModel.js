const mongoose= require('mongoose');
const validator= require('validator');
const Vehicule=require('./vehiculeModel')

const clientSchema= mongoose.Schema({
    nom:{
        type:String,
        required:[true,"we need the cars'owner first name"]
    
    },
    prenom:{
        type:String,
        required:[true,"we need the cars'owner seconf name "]
    }
,
email :{
    type:String,
   required:[true,'a client must have an email'],
   unique:true,
   lowercase:true,
   validate :[validator.isEmail,'your email is invalid , please check']
},
cars:[{
    type:mongoose.Schema.ObjectId,
    ref:'Vehicule'
}]
    
})
const Client= mongoose.model('Client',clientSchema);
module.exports=Client
