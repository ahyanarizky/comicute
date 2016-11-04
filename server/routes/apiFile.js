const express = require('express');
const router = express.Router();
const controller = require('../controller/fileController');

router.get('', controller.getFiles) //get all files
router.post('/', controller.addFile) //add file
router.delete('/:id', controller.deleteFile) //delete file with id
router.get('/:id', controller.getFileById) //get file data for edit
router.put('/:id', controller.updateFile) //update file

module.exports = router;
