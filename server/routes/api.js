const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/user') //get all users
router.post('/user/create', controller.addUser) //add user
router.delete('/user/:id') //delete user with id
router.get('/user/:id') //get user data for edit
router.put('/user/update') //update user

router.get('/comic') //get all comics
router.post('/comic/create') //add comic
router.delete('/comic/:id') //delete comic with id
router.get('/comic/:id') //get comic data for edit
router.put('/comic/update') //update comic


module.exports = router;
