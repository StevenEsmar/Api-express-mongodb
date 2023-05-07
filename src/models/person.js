const mongoose = require('mongoose');

const personModel = mongoose.Schema({
    dna:{
        type: String,
        required : true
    },
    mutant:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Person',personModel);