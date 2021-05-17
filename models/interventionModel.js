const mongoose= require('mongoose');
const Operation=require('./operationModel')
const Vehicule=require('./vehiculeModel')
const User=require('./userModel')
const Machine=require('./machineModel')

const interventionSchema= mongoose.Schema({

    dateIntervention : Date ,
    operation:{
        type:mongoose.Schema.ObjectId,
        ref:'Operation'
    },
    vehicule:{
        type:mongoose.Schema.ObjectId,
        ref:'Vehicule'
    },
    technicien:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    outils:[{
        type:mongoose.Schema.ObjectId,
        ref:'Machine'
    }],
    typeIntervention: {
        type: String,
        enum: ['mecanique', 'carrosserie' ,'diagnostique'],
        default: 'mecanique'
    },
    etat:{
        type:String,
        enum: ['en cours', 'en attente' ,'terminé'],
        default: 'en attente'
    }

})
const Intervention=mongoose.model('Intervention',interventionSchema);
module.exports=Intervention
