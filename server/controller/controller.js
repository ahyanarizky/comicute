const express = require('express')
const router = express.Router()
const User = require('../models/users')
const File = require('../models/file')

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
            birthdate: req.body.birthdate,
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
            birthdate: req.body.birthdate,
            role: req.body.role
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    file MODELS

//    get File
    getFiles: function (req, res) {
        File.find({}, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    add File
    addFile: function (req, res) {
        const file = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            photoPath: req.body.photoPath,
            filePath: req.body.filePath,
            downloadCount: req.body.downloadCount
        }

        File.create(file, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    Delete File
    deleteFile: function (req, res) {
        File.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    get File data for edit
    getFileById: function (req, res) {
        File.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    edit File
    updateFile: function (req, res) {
        File.findOneAndUpdate({
            _id: req.params.id
        }, {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            photoPath: req.body.photoPath,
            filePath: req.body.filePath,
            downloadCount: req.body.downloadCount
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    }

}
