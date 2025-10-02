const express = require("express")
require("dotenv").config()
const app = express()
const {connectdb} = require("../src/db/dbconnection")


app.use(express.json())
app.use(express.urlencoded({extended:true}))



















connectdb()
.then(()=>{
    console.log("database connected");
    app.listen(process.env.port ,()=>{
        console.log(" app is listening on port");
    })
})
.catch((error)=>{
    console.log("error", error.message);
})