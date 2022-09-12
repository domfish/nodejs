const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    produit : [{type : Schema.Types.ObjectId , ref : 'produit'}] ,
    commande : [{type :Schema.Types.ObjectId , ref : 'commande'}]
},{
    timestamps: true,
    versionKey : false,
})

module.exports = mongoose.model('user',userSchema)