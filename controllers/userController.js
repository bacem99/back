const Factory=require('./handlerFactory')
const User=require("./../models/userModel")

exports.createUser = Factory.createOne(User);
exports.updateUser = Factory.updateOne(User);
exports.deleteUser = Factory.deleteOne(User);
exports.getAllUsers=(req,res)=>{
    res.status(500).json({
        "status":500,
        "message":"still yet on development process"
    })
}
exports.getUser=(req,res)=>{
    res.status(500).json({
        "status":500,
        "message":"still yet on development process"
    })
}
exports.addUser =(req,res)=>{
    res.status(500).json({
        "status":500,
        "message":"still yet on development process"
    })
}
exports.deleteUser=(req,res)=>{
    res.status(500).json({
        "status":500,
        "message":"still yet on development process"
    })
}
exports.updateUser=(req,res)=>{
    res.status(500).json({
        "status":500,
        "message":"still yet on development process"
    })
}