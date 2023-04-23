const express = require('express');
const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn)