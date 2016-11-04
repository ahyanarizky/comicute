'use strict'
const express = require('express')
const router = express.Router()
const User = require('../models/users')

module.exports = {

//    get user
    getUser: (req, res) => {
        User.find({}, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    //add user
    addUser: (req, res) => {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            birthdate: req.body.birthdate,
            role: req.body.role
        }

        User.create(user, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    delete user
    deleteUser: (req, res) => {
        User.findOneAndRemove({
            _id: req.params.id
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    get user data for edit
    getUserById: (req, res) => {
        User.findOne({
            _id: req.params.id
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    //edit user
    updateUser: (req, res) => {
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            birthdate: req.body.birthdate,
            role: req.body.role
        }, {
            new: true,
            upsert: true
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}
