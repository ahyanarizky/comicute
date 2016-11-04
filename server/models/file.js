const mongoose = require('mongoose')
const Schema = mongoose.Schema

var File = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    photoPath: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number
    }
})

module.exports = mongoose.model('File', File)