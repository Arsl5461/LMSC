const { timeStamp } = require('console')
const mongoose=require('mongoose')

const goalSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
name:{
    type:String,
    required:true,
},
    
    text:{
        type:String,
        required:[true,"Title is required"]
    },
    body:{
        type:String,
    required:true
    },
    category:{
        type:String,
required:true    
    },
    image:{
        data:Buffer,
        contentType:String,
    }
},
{
timestamps:true,
})

module.exports=mongoose.model('Goals',goalSchema)