const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/', controller.getUser) //get all users
router.post('/', controller.addUser) //add user
router.delete('/:id', controller.deleteUser) //delete user with id
router.get('/:id', controller.getUserById) //get user data for edit
router.put('/:id', controller.updateUser) //update user

module.exports = router;
