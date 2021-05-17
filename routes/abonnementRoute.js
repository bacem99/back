const express=require('express');
const AbonnementController=require('./../controllers/abonnementController')
const router=express.Router();

router
  .route('/:id')
  //.get(AbonnementController.getAbonnement)
  .patch(AbonnementController.updateAbonnement)
  .delete(AbonnementController.deleteAbonnement);

  
  router
    .route('/')
    .post(AbonnementController.createAbonnement)

module.exports = router ;
