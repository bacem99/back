const Abonnement=require('./../models/abonnementModel');
const Factory=require('./handlerFactory');

exports.getAllAbonnements = Factory.getAll(Abonnement);
exports.getAbonnement = Factory.getOne(Abonnement);



exports.createAbonnement = Factory.createOne(Abonnement);
exports.updateAbonnement = Factory.updateOne(Abonnement);
exports.deleteAbonnement = Factory.deleteOne(Abonnement);
