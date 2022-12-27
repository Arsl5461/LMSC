const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User=require("../model/userModel")


const protect=asyncHandler(async(req,res,next)=>{
let token

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
        // Get token from header
        token=req.headers.authorization.split(' ')[1]
        // Verify token
            const decoded=jwt.verify(token,process.env.JWT_SCRT)
            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')
            next()
    } catch (error) {
        console.log(error);
        res.status(401)
        throw new Error("Not Authorized")
    }
}
if(!token){
res.status(401)
throw new Error('Not Authorized No token')
}
})
const verifyEmaill= async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(user.isVerified){
            res.json("User is Verified")
            next()
        }
        else{
            res.json("Your email is not verified.Please Check your email.");
        }
    }
    catch(error){
        console.log(error);
    }
  }

module.exports={ protect,verifyEmaill }