const mongoose = require("mongoose")
const employeescheema=({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    idcard:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model("addemployee",employeescheema)