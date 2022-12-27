const express=require ('express')
const router=express.Router()
const {registerUser,loginUser,getMe,verifyEmail,forgotPassword}=require("../controllers/userController")
const {protect,verifyEmaill} =require("../middleware/authMiddleware")

router.post('/',registerUser)
router.post('/login',verifyEmaill,loginUser)
router.post("/requestPasswordReset",forgotPassword)
router.get("/verify-email",verifyEmail)
router.get('/me',protect,getMe)


module.exports=router