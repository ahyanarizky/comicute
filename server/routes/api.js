const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/user', controller.getUser) //get all users
router.post('/user/create', controller.addUser) //add user
router.delete('/user/delete/:id', controller.deleteUser) //delete user with id
router.get('/user/:id', controller.getUserById) //get user data for edit
router.put('/user/update/:id', controller.updateUser) //update user

router.get('/comic', controller.getComic) //get all comics
router.post('/comic/create', controller.addComic) //add comic
router.delete('/comic/delete:id') //delete comic with id
router.get('/comic/:id') //get comic data for edit
router.put('/comic/update') //update comic


module.exports = router;
