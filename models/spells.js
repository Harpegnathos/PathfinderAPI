const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    system: {
        required: true,
        type: Object
    },
    type: {
        required: true,
        type: String
    },

})

module.exports = mongoose.model('Spell', dataSchema, 'SPELL_LIST')