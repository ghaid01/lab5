'use strict';

const mongoose = require('mongoose');
const Product = require('./models/products-schema');

const MONGOOSE_URI = 'mongodb://localhost:27017//mongoDB-class5';

mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true});

const shirt = new Product( {category: 'clothes', price:20, weight:5, quantity_in_stock: 50})

shirt.save();