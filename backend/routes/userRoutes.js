const express=require ('express')
const router=express.Router()
const {registerUser,loginUser,getMe,verifyEmail,forgotPassword,passwordReset}=require("../controllers/userController")
const {protect,verifyEmaill} =require("../middleware/authMiddleware")

router.post('/',registerUser)
router.post('/login',loginUser)
router.post("/requestPasswordReset",forgotPassword)
router.post("/resetPassword",passwordReset)
router.get("/verify-email",verifyEmail)
router.get('/me',protect,getMe)


module.exports=router