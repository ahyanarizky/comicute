const express = require('express')
const router = express.Router()
const User = require('../models/users')

module.exports = {
    formRegisterAndLogin: function(req, res) {
        if (req.user) {
            res.redirect('/dashboard')
        } else {
            res.render('auth', { title: "comicute" })
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
        if (req.body.password != req.body.confirm_password) {
            res.render('auth', { alert: 'confirm password not matched' })
        } else {
            User.register({
                name: req.body.name,
                birthdate: req.body.birthdate,
                role: req.body.role,
                email: req.body.email,
                username: req.body.username
            }, req.body.password, function(err, result) {
                if (err) {
                    console.log(err);
                    res.render('register', { alert: 'Registration unsuccessfull' })
                } else {
                    passport.authenticate('local')(req, res, function() {
                        req.session.save(function(err, next) {
                            if (err)
                                return next(err)
                                    // res.redirect('/dashboard')
                            res.send('register good')
                        })
                    })
                }
            })
        }
    }

}
