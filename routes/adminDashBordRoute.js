const express=require('express');
const router=express.Router();
const adminDashBordController=require("./../controllers/adminDashBordController")

router
  .route('/')
  .get(adminDashBordController.GetClients);

  module.exports = router;