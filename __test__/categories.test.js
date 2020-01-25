'use strict';

require('@code-fellows/supergoose');

const Category = require('../models/categories-model.js');
const category = new Category();

describe('Category Model', () => {
    it('create() an new category', () => {
        let obj = { price:60, weight:7, quantity_in_stock: 30}
        return category.create(obj)
        .then(record => {  
            Object.keys(obj).forEach( key =>{
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });
    it('can get() a category', () => {
        let obj = { price:10, weight:2, quantity_in_stock: 20 };
        return category.create(obj)
          .then(record => {
            return category.get(record._id)
              .then(categoryItem => {
                Object.keys(obj).forEach(key => {
                  expect(categoryItem[key]).toEqual(obj[key]);
                });
              });
          });
      });
    

});
