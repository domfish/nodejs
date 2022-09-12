const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commandeSchema = new Schema({
    total : {
        type : Number
    },
    listOfProduct : {
        produit : [{type : Schema.Types.ObjectId , ref : 'produit'}] ,
    },
    user : [{type : Schema.Types.ObjectId , ref :'user'}]
},{
    timestamps: true,
    versionKey : false,
})

module.exports = mongoose.model('commande',commandeSchema)
