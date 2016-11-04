const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/user', controller.getUser) //get all users
router.post('/user/create', controller.addUser) //add user
router.delete('/user/delete/:id', controller.deleteUser) //delete user with id
router.get('/user/:id', controller.getUserById) //get user data for edit
router.put('/user/update/:id', controller.updateUser) //update user

module.exports = router;
