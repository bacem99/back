const Vehicule =require('./../models/vehiculeModel');
const factory=require('./handlerFactory')

exports.createVehicule = factory.createOne(Vehicule);
exports.updateVehicule = factory.updateOne(Vehicule);
exports.deleteVehicule = factory.deleteOne(Vehicule);
