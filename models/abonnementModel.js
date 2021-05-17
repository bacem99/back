const mongoose= require('mongoose');
const User=require('./userModel')

const abonnementSchema= mongoose.Schema({
prix:Number,
dateDebut:Date,
duree:Number,
type : String , 
client:{
    type:mongoose.Schema.ObjectId,
    ref:'User'
}

})
const Abonnement=mongoose.model('Abonnement',abonnementSchema);
module.exports=Abonnement