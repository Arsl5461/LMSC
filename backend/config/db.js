const mongoose=require('mongoose')
const User=require("../controllers/userController")

const connectDB = async()=>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
}
catch(error){
    console.log(error);
    process.exit(1)
}
}
const verifyEmail= async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(user.isverified){
            next()
        }
        else{
            console.log("please check Your email");
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports=connectDB