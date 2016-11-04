'use strict'
const express = require('express')
const router = express.Router()
const File = require('../models/files')

module.exports = {

//    get File
    getFiles: (req, res) => {
        File.find({}, (err, data) => {
            if (err) res.send(err)
            else res.json(data)
        })
    },

//    add File
    addFile: (req, res) => {
        const file = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            photoPath: req.body.photoPath,
            filePath: req.body.filePath,
            downloadCount: req.body.downloadCount
        }

        File.create(file, (err, data) => {
            if (err) res.send(err)
            else res.json(data)
        })
    },

//    Delete File
    deleteFile: (req, res) => {
        File.findOneAndRemove({
            _id: req.params.id
        }, (err, data) => {
            if (err) res.send(err)
            else res.json(data)
        })
    },

//    get File data for edit
    getFileById: (req, res) => {
        File.findOne({
            _id: req.params.id
        }, (err, data) => {
            if (err) res.send(err)
            else res.json(data)
        })
    },

//    edit File
    updateFile: (req, res) => {
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
        }, (err, data) => {
            if (err) res.send(err)
            else res.json(data)
        })
    }

}
