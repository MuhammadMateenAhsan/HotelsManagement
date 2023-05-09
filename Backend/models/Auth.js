const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
        
    },
    password: {
        type:String,
        unique:true,
        required:true
    }
})

module.exports=mongoose.model("signup",userSchema)