const express=require('express');
const operationController=require('./../controllers/operationController')
const authentificationController=require('./../controllers/authentificationController')
const router=express.Router();



router
  .route('/:nom')
 // .get(operationController.getOperation)
  .patch(operationController.updateOperation)
  .delete(operationController.deleteOperation)
  .get(authentificationController.protect, operationController.findOperations)

  
  router
    .route('/')
    .post(operationController.createOperation) 
    

module.exports = router;
