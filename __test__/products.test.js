'use strict';

require('@code-fellows/supergoose');

const Product = require('../models/products-model.js');
const product = new Product();

describe('Product Model', () => {
    it('create() an new product', () => {
        let obj = {category: 'clothes', price:20, weight:5, quantity_in_stock: 50}
        return product.create(obj)
        .then(record => {     //save returns a promise 
            Object.keys(obj).forEach( key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });
    it('can get() a food', () => {
        let obj = { category: 'clothes', price:60, weight:15, quantity_in_stock: 40 };
        return product.create(obj)
          .then(record => {
            return product.get(record._id)
              .then(productItem => {
                Object.keys(obj).forEach(key => {
                  expect(productItem[key]).toEqual(obj[key]);
                });
              });
          });
      });
    });
