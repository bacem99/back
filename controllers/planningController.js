const Planning=require('./../models/planningModel');
const Factory=require('./handlerFactory')

exports.createPlanning = Factory.createOne(Planning);
exports.updatePlanning = Factory.updateOne(Planning);
exports.deletePlanning = Factory.deleteOne(Planning);
