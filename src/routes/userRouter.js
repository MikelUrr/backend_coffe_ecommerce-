import { Router } from 'express';
import userApiController from '../controllers/userController/userApiController.js';
import authController from '../controllers/userController/authController.js';

const router = Router();



router.post('/register',(req, res) => {
    userApiController.createUser(req, res);
  });

router.post('/login', (req, res) => {
    authController.login(req, res);
  });
  
    router.post('/logout', (req, res) => {
      authController.logout(req, res);
    });
router.delete('/:id',(req, res) => {
    userApiController.removeUser(req, res);
  });
/* 
  router.put('/:id', isAuthenticatedApi, (req, res) => {
    userApiController.updateUser(req, res);
  });
  router.post('/useractive', isAuthenticatedApi, (req, res) => {
    userApiController.deactivateUser(req, res);
  });
//con este get /user/id obtienes todos los datos de usuario
  router.get('/:id', isAuthenticatedApi,(req, res) => {
    userApiController.getusersById(req, res);
  }); */

  router.get('/',(req, res) => {
    userApiController.getAllUsers(req, res);
  });

 
  

  export default router;