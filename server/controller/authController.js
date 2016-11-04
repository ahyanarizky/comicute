const express = require('express')
const router = express.Router()
const User = require('../models/users')

module.exports = {
    formRegisterAndLogin: function(req, res) {
        if (req.user) {
            res.redirect('/dashboard')
        } else {
            res.render('auth', {title: "comicute"})
        }
    },

    processLogin: function(req, res) {
        req.session.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('auth')
            }
        })
    },
    proccessRegister: function(req, res) {
        User.register({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        }, req.body.password, function(err, result) {
            if (err) {
                console.log(err);
                res.render('register', {alert: 'Registration unsuccessfull'})
            } else {
                passport.authenticate('local')(req, res, function() {
                    req.session.save(function(err, next) {
                        if (err)
                            return next(err)
                        res.redirect('/dashboard')
                    })
                })
            }
        })
    }

}
