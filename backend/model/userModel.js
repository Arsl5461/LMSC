const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a Name"]
    },
    email:{
        type:String,
        required:[true,"Please add an Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please add a Password"]
    },
    phone:{
        type:String,
        required:[true,"Please add a Phone"]
    },
    city:{
        type:String,
        required:[true,"Please add a city"]
    },
    emailToken:{
        type:String,
    },
    isVerified:{
        type:Boolean,
    }
},
{
timestamps:true

})

module.exports=mongoose.model('Users',userSchema)