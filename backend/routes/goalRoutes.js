const express=require('express')
const router=express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals, getAllGoals,getUsers}=require("../controllers/goalController")
router.route("/").get(getAllGoals)
const {protect} =require("../middleware/authMiddleware")
router.route('/user').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals)




module.exports=router