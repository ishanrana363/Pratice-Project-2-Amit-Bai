const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.DB_URL

const connectDB =  ()=>{
    try {
        mongoose.connect(port)
        console.log("db is connectd");
    } catch (error) {
        console.log(error);
    }

}


module.exports = connectDB