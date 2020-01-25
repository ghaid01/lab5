'use strict';

const mongoose = require('mongoose');


//category_id - string, required // mongo gives the id 
// price - number, required
// weight - number
// quantity_in_stock - number, required

const product = mongoose.Schema({
    category: { type: String, required: true },
    price: { type: Number, required: true},
    weight: { type: Number, required: true},
    quantity_in_stock: { type: Number, required: true}
});

module.exports = mongoose.model('product', product)