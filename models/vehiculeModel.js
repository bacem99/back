const mongoose= require('mongoose');
const Client= require('./clientModel')

const vehiculeSchema= mongoose.Schema({
    matricule:{
        type:String,
        required:[true,'a car must have matricule']   
    },
    vin : String , 
    marque:String,
    modele:String,
    puissance:String,
    carburant:{
        type:String,
        enum: ['gaz', 'gazoile' ,'essence'],
        default: 'essence'
    

    },
    client:{
        type:mongoose.Schema.ObjectId,
        ref:'Client'
    }


})
const Vehicule =mongoose.model('Vehicule',vehiculeSchema);
module.exports=Vehicule ;