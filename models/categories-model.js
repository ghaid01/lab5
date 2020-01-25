'use strict';

const schema = require('./categories-schema.js');

class Categories{
    constructor() {} //instantiate this object whith no predetermined set of data

    get(_id){
        if(_id){
            return schema.findOne({ _id })
        }else{
            return schema.find({}); //find everything in this
        }

    }
    create(record){
        let theNewRecord = new schema(record);
        return theNewRecord.save();

    }
    update(_id,record){
        return schema.findByIdAndUpdate(_id, record, { new: true });// without new true it wont get updated 

    }
    delete(_id){
       return schema.findByIdAndDelete(_id) 

    }
}

module.exports = Categories;