const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/user', controller.getUser) //get all users
router.post('/user/create', controller.addUser) //add user
router.delete('/user/delete/:id', controller.deleteUser) //delete user with id
router.get('/user/:id', controller.getUserById) //get user data for edit
router.put('/user/update/:id', controller.updateUser) //update user

router.get('/file', controller.getFiles) //get all files
router.post('/file/create', controller.addFile) //add file
router.delete('/file/delete/:id', controller.deleteFile) //delete file with id
router.get('/file/:id', controller.getFileById) //get file data for edit
router.put('/file/update/:id', controller.updateFile) //update file


module.exports = router;
