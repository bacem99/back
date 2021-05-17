const Machine=require('./../models/machineModel');
const Factory=require('./handlerFactory')

exports.createMachine = Factory.createOne(Machine);
exports.updateMachine = Factory.updateOne(Machine);
exports.deleteMachine = Factory.deleteOne(Machine);
