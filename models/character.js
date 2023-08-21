const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    spellList: {
        required: false,
        type: Array
    }
})

module.exports = mongoose.model('Character', dataSchema, 'CHARACTERS')