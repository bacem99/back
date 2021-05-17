const express=require('express');
const interventionController=require('./../controllers/interventionController')
const router=express.Router();



router
  .route('/:id')
 // .get(interventionController.getIntervention)
  .patch(interventionController.updateIntervention)
  .delete(interventionController.deleteIntervention);

  
  router
    .route('/')
    .post(interventionController.createIntervention);

module.exports=router;
