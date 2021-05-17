const express=require('express');
const vehiculeController=require('../controllers/vehiculeController')
const router=express.Router();



router
  .route('/:id')
  //.get(vehiculeController.getVehicule)
  .patch(vehiculeController.updateVehicule)
  .delete(vehiculeController.deleteVehicule);

  
  router
    .route('/')
    .get(vehiculeController.createVehicule) 

module.exports=router;
