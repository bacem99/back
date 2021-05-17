const mongoose= require('mongoose');
const Garage=require('./garageModel')

const machineSchema= mongoose.Schema({
    nomMachine:String,
    Constructeur:String,
    modele:String,
    etat:{
        type:String,
        enum: ['libre', 'utilisé' ,'en panne'],
        default: 'libre'
    },
    garage:{
        type:mongoose.Schema.ObjectId,
        ref:'Garage'
    }
})
const Machine=mongoose.model('Machine',machineSchema);
module.exports=Machine
