const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.getComic) //get all comics
router.post('/', controller.addComic) //add comic
router.delete('/:id', controller.deleteComic) //delete comic with id
router.get('/:id', controller.getComicById) //get comic data for edit
router.put('/:id', controller.updateComic) //update comic

module.exports = router;
