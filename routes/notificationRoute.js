const express=require('express');
const notificationController=require('./../controllers/notificationController')
const router=express.Router();




router
  .route('/:id')
 // .get(notificationController.getNotification)
  .patch(notificationController.updateNotification)
  .delete(notificationController.deleteNotification);

  
  router
    .route('/')
    .post(notificationController.createNotification)

module.exports = router;
