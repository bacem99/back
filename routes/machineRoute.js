const express=require('express');
const machineControlleur=require('./../controllers/machineController')
const router=express.Router();



router
  .route('/:id')
 // .get(machineControlleur.getMachine)
  .patch(machineControlleur.updateMachine)
  .delete(machineControlleur.deleteMachine);

  
  router
    .route('/')
    .post(machineControlleur.createMachine)

module.exports = router;
