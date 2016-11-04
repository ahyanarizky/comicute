const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Comic = require('../models/comics')

module.exports = {

//    USERS MODEL
//    get user
    getUser: function (req, res) {
        User.find({}, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    //add user
    addUser: function (req, res) {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }

        User.create(user, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    delete user
    deleteUser: function (req, res) {
        User.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    get user data for edit
    getUserById: function (req, res) {
        User.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    //edit user
    updateUser: function (req, res) {
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }, {
            new: true,
                upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    COMICS MODELS

//    get comic
    getComic: function (req, res) {
        Comic.find({}, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    add comic
    addComic: function (req, res) {
        const comic = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            photoPath: req.body.photoPath,
            filePath: req.body.filePath
        }

        Comic.create(comic, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    Delete comic
    deleteComic: function (req, res) {
        Comic.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    get comic data for edit
    getEditComic: function () {

    },

//    edit comic
    editComic: function () {

    }

}
