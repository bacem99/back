const mongoose= require('mongoose');

const operationSchema= mongoose.Schema({
    nom:String,
    dureePrevue:Number,
    taux:String,
    prix:Number
})
const Operation=mongoose.model('Operation',operationSchema);
module.exports=Operation;
