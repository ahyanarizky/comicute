const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/comic', controller.getComic) //get all comics
router.post('/comic/create', controller.addComic) //add comic
router.delete('/comic/delete/:id', controller.deleteComic) //delete comic with id
router.get('/comic/:id', controller.getComicById) //get comic data for edit
router.put('/comic/update/:id', controller.updateComic) //update comic

module.exports = router;
