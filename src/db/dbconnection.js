const mongoose = require("mongoose")
const {dbname} = require("../constants")


require("dotenv").config


async function  connectdb() {

try {
    await  mongoose.connect(`${process.env.mongouri}/${dbname}`)
} catch (error) {
    console.log("error",error.message);
 
}  
}

module.exports={connectdb}