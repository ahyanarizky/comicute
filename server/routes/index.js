const express = require('express');
const router = express.Router();
const controller = require('../controller/authController')
const passport = require('passport')

router.get('/auth', controller.formRegisterAndLogin)
router.post('/auth/login', passport.authenticate('local'), controller.processLogin)
router.post('/auth/register', controller.proccessRegister)

module.exports = router;
