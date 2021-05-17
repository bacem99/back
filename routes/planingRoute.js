const express=require('express');
const planingController=require('./../controllers/planningController')
const router=express.Router();



router
  .route('/:id')
  //.get(planingController.getPlaning)
  .patch(planingController.updatePlanning)
  .delete(planingController.deletePlanning);

  
 router
    .route('/')
    .post(planingController.createPlanning) 

module.exports = router;
