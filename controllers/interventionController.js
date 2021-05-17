const Intervention=require('./../models/interventionModel');
const Factory=require('./handlerFactory')

exports.createIntervention = Factory.createOne(Intervention);
exports.updateIntervention = Factory.updateOne(Intervention);
exports.deleteIntervention = Factory.deleteOne(Intervention);
