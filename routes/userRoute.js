const express=require('express')
const userController=require('../controllers/userController')
const authentificationController=require('../controllers/authentificationController')
const router=express.Router()

router.post('/signup',authentificationController.signup) ;
router.post('/login',authentificationController.login) ;
router
  .route('/')
  .get(authentificationController.protect ,userController.getAllUsers)
  .post(userController.addUser) 
  router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)
  module.exports=router