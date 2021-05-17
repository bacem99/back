const Notification=require('./../models/notificationModel');
const Factory=require('./handlerFactory')


exports.createNotification = Factory.createOne(Notification);
exports.updateNotification = Factory.updateOne(Notification);
exports.deleteNotification = Factory.deleteOne(Notification);
