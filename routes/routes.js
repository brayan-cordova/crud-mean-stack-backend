const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');


// routes user data
router.route('/user/getAll').get(userController.getDataControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;