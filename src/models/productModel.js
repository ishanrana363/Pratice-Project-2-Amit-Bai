const mongoose = require("mongoose")
const DataSchema = mongoose.Schema({
    title : {
        type : String
    },
    short_dec : {
        type : String
    } ,
    price : {
        type : Number
    },
    discount : {
        type : Number
    },
    img : {
        type : String,
    },
    stock : {
        type : String
    },
    star : {
        type : String,
    },
    remark : {
        type : String
    }
},{timestamps : true,versionKey:false})

const  product = mongoose.model("products",DataSchema)
module.exports = product