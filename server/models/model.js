const mongoose = require('mongoose');

const task = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    done: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('Data', task)