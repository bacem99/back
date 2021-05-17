const Client=require('./../models/clientModel');
const Factory=require('./handlerFactory')

exports.createClient = Factory.createOne(Client);
exports.updateClient = Factory.updateOne(Client);
exports.deleteClient = Factory.deleteOne(Client);
