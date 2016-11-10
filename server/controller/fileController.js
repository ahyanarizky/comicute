'use strict'
const express = require('express')
const router = express.Router()
const File = require('../models/files')
const multer = require('multer')


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

        console.log(req.body)

        File.create(file, (err, data) => {
            if (err) res.send(err)
            else {

                const storage = multer.diskStorage({
                    destination: function (req, file, callback) {
                        callback(null, `public/file`)
                    },
                    filename: function (req, file, callback) {
                        callback(null, `${Date.now()}-${file.originalname}`)
                    }
                })

                const upload = multer({ storage: storage }).single('gambar')

                upload(req, res, function (err) {
                    if (err) {
                        return res.end(err)
                    }
                    else if (req.file.filename) {
                        res.end(`${req.file.filename}`)
                    }
                    else {
                        res.end('Error no file!', err)
                    }

                })
            }
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
