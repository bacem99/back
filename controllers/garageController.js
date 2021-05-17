const Garage=require('./../models/garageModel');
const Factory=require('./handlerFactory')

exports.createGarage = Factory.createOne(Garage);
exports.updateGarage = Factory.updateOne(Garage);
exports.deleteGarage = Factory.deleteOne(Garage);
