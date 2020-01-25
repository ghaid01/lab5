'use strict';

const schema = require('./products-schema.js');

class Product{
    constructor(){}
    
    get(_id){
        if(_id){
            return schema.findOne({_id});
        }
        else {
            return schema.find({});
        }
    }
    create(record){
        let theNewRecord = new schema(record);
        return theNewRecord.save();
    }
    update(_id, record){
        return schema.findByIdAndUpdate(_id, record, {new: true});
        }
        delete(_id){
            return schema.findByIdAndDelete(_id);
        }

}
module.exports = Product;