const express=require('express');
const router=express.Router();
const clientController=require('./../controllers/clientController')
const authentificationController=require('./../controllers/authentificationController')

//router.use(authentificationController.protect)
router
  .route('/:id')
  //.get(ClientController.getClient)
  .patch(clientController.updateClient)
  .delete(clientController.deleteClient);

  
  router
    .route('/')
    .post(clientController.createClient)

module.exports = router;
