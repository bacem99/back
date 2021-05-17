const Operation=require('./../models/operationModel');


const Factory=require('./handlerFactory')

exports.createOperation = Factory.createOne(Operation);
exports.updateOperation = Factory.updateOne(Operation);
exports.deleteOperation = Factory.deleteOne(Operation);
exports.findOperations  = Factory.findOne(Operation);
/*exports.findOperations=async(req,res,next)=>{
    try{
        
        //
        var chaine = req.params.nom;
        //var a=char.charAt[1]
        
         const arr =await Operation.find({"nom": {$regex: '^' + chaine, $options: 'i'}})
        //

    const parametre=req.params;
    //const arr = await Operation.find(parametre);
   // console.log(a)
    console.log(chaine)
    console.log(arr)
    res.status(200).json({"data":arr})
    
    
    
    }catch(err){console.log(err)}
}*/