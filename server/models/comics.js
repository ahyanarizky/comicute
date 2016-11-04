const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Comic = new Schema({
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
    }
})

module.exports = mongoose.model('Comic', Comic)