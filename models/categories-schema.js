'use strict';

const mongoose = require('mongoose');


const category = mongoose.Schema({
    // category: { type: String, required: true },
    price: { type: Number, required: true},
    weight: { type: Number, required: true},
    quantity_in_stock: { type: Number, required: true}
});

module.exports = mongoose.model('category', category)