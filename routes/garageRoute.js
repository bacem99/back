const express=require('express');
const garageController=require('./../controllers/garageController')
const router=express.Router();


router
  .route('/:id')
  //.get(garageController.getGarage)
  .patch(garageController.updateGarage)
  .delete(garageController.deleteGarage);

  
router
    .route('/')
    .post(garageController.createGarage)

module.exports = router;
