const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema

const produitSchema = new Schema({
    productName : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    prise : {
        type : Number,
        required : true
    },
    description : {
        type : String,
    }
},{
    timestamps: true,
    versionKey : false,
})

module.exports = mongoose.model('produit',produitSchema)