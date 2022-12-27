const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require("../model/userModel")
const Reset=require("../model/passwordReset")
const dotenv=require("dotenv").config()
const crypto=require("crypto")
const nodemailer=require("nodemailer")
const { v4: uuidv4 } = require('uuid');

//@desc Register Users
//@route POST/api/users
//@access PUBLIC
var transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"arxlan62@gmail.com",
    pass:"lheyvubtkgabmhaa"

  },
  tls:{
    rejectUnauthorized:false
  }
})
const registerUser=asyncHandler(async(req,res)=>{
var transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"arxlan62@gmail.com",
    pass:"lheyvubtkgabmhaa"

  },
  tls:{
    rejectUnauthorized:false
  }
})
  const {name,email,password}=req.body

  
  if(!name || !email || !password){
    res.status(400)
    throw new Error("Please add all fields")
  }
  // Check if user Exist 
const userExists=await User.findOne({email})
if(userExists){
    res.status(400)
    throw new Error('User Already Registered')
}
//Hash password
const salt=await bcrypt.genSalt(10)
const hashedPassword= await bcrypt.hash(password,salt)

//Create User
const user=await User.create({
  name,
  email,
  password:hashedPassword,
  emailToken:crypto.randomBytes(64).toString('hex'),
  isVerified:false
})
// Send Verification Email To User
var mailOptions={
  from:'"verify your email" <arsltech337@gmail.com>',
  to:user.email,
  subject:'Labortory System -verify your email',
  html:`<h2>${user.name}! Thanks for registering on our site</h2>
  <h4>Please Verify your email to continue...</h4>
  <a href="http://${req.headers.host}/api/users/verify-email?token=${user.emailToken}">Verify Your Email</a>`
}
console.log(req.headers.host);
//Sending Email
transporter.sendMail(mailOptions,function(error,info){
  if(error){
    console.log(error)
  }
  else{
    console.log('Verification email is send to your email');
  }
})
if(user){
  res.status(201).json({
    _id:user.id,
    name:user.name,
    email:user.email,
    token:generateToken(user._id)
  })
}
else{
  res.status(400)
  throw new Error("Invalid User data")
}
})
// Verify Email And Route to Login
const verifyEmail=async(req,res)=>{
  try {
    const token=req.query.token
    const user=await User.findOne({emailToken:token})
    if(user){
      user.emailToken=null;
      user.isVerified=true;
      await user.save();
      res.json("User is Verified")
    }
    else{
      console.log("Email is not verified");
    }
  } catch (error) {
    console.log(error);
  }

}
//@desc Login Users
//@route POST/api/users
//@access PUBLIC


const loginUser=asyncHandler(async(req,res)=>{
  const {email,password} = req.body


  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id:user.id,
      name:user.name,
      email:user.email,
      token:generateToken(user._id),
    })
  }
  else{
      res.status(400)
      throw new Error("Invalid Credentials")
    }   
})
const forgotPassword=async(req,res)=>{
  const {email,redirectUrl}=req.body;
  //Check if user exist 
   User.find({email}).then((data)=>{
    if(data.length){
      //user exists
      //user is verified
      if(!data[0].isVerified){
        res.json({
          status:"Failed",
          message:"Email hasn't been verified yet .Check your Inbox"
        })
      }
      else{
        sendResetEmail(data[0],redirectUrl,res);
      }
    }
  })
}
//@desc Me Users
//@route POST/api/users
//@access PUBLIC

const getMe=asyncHandler(async(req,res)=>{
    const {_id,name,email}=await User.findById(req.user.id)
    res.status(200).json({
      id:_id,
      name,
      email
    })
})


//Generate Token
const generateToken = (id) => {
  return jwt.sign({id},process.env.JWT_SCRT,{
    expiresIn:'30d',
  })
}
// send password reset email
const sendResetEmail=({_id,email},redirectUrl,res)=>{
const resetString=uuidv4() + _id;
//First clear all the reset request 
Reset.deleteMany({userId:_id}).then(result=>{
//Mail options
var mailOptions={
  from:'<arsltech337@gmail.com>',
  to:email,
  subject:'Password Reset',
  html:`
  <h4> We heard that you loss the password.Dont worry use the link below to reset it.This link expires in 60 minutes</h4>
<p>Press<a href=${redirectUrl + "/" + _id + "/" + resetString}>here</a> to proceed `

}
const saltRounds=10;
bcrypt.hash(resetString,saltRounds).then(hashedResetString=>{
//Set values
const newPasswordReset=new Reset({
  userId:_id,
  resetString:hashedResetString,
  createdAt:Date.now(),
  expiresAt:Date.now() + 3600000
})
newPasswordReset.save().then(()=>{
  transporter.sendMail(mailOptions).then(()=>{
    res.json({
      status:"PENDING",
      message:"PASSWORD RESET EMAIL SEND SUCCEESSFULY"
    })
  }).catch(error=>{
    console.log("Password Reset  Email Failed");
  })
}).catch(error=>{
  console.log(error);
})
}).catch(error=>{
  console.log(error);
  res.json({
    status:"Failed",
    message:"An error occured while hashing the password reset"
  })
})

})
.catch(error=>{
  console.log(error);
  res.json({
    status:"FAILED",
    message:"Clearing existing password reset records failed"
  })
})
}


module.exports={
    registerUser,
    loginUser,
    getMe,
    verifyEmail,
    forgotPassword
} 

