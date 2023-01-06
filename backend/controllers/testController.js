const asyncHandler = require("express-async-handler");
const Tests = require("../model/testModel");

//@desc Get Goals
//@route GET/api/goals
//@access PRIVATE

// const getGoals=asyncHandler(async(req,res)=>{
//     const goal= await Goals.find({user:req.user.id})
//    res.status(200).json(goal)
// })
//@desc Get All Goals
//@route GET/api/allgoals
//@access PUBLIC
const options = {
	// sort matched documents in descending order by rating
	sort: { "createdAt": -1 },
  };
const getTests = asyncHandler(async (req, res) => {
	const test = await Tests.find(options).limit(3);

	res.status(200).json(test);
});
const getAllTests = asyncHandler(async (req, res) => {
	const test = await Tests.find();

	res.status(200).json(test);
});
const getTestDetails=asyncHandler(async(req,res)=>{
	const test=await Tests.findOne({_id:req.params.id})
	res.status(200).json(test)
})
//@desc Set Goals
//@route PUSH/api/goals
//@access PRIVATE
// const Storage=multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     },
// })

const setTests = asyncHandler(async (req, res) => {
	const { title, price, description } = req.body;
	if (!title || !price) {
		res.status(400);
		throw new Error("Please add a title or price");
	}
	// const user=await User.find()
	// user.forEach((user)=>{
	//     if(user.id === req.user.id){
	//         userName=user.name
	//     }
	// })

	const test = await Tests.create({
		testname: title,
		testprice: price,
		description,
		// body:req.body.body,
		// category:req.body.category,
		// user:req.user.id,
		// name:userName,
	});
	res.json(test);
});
//@desc Get Goals
//@route PUT/api/goals:id
//@access PRIVATE

// const updateGoals=asyncHandler(async(req,res)=>{
//     const goal=await Goals.findById(req.params.id)

//     if(!goal){
//         res.status(400)
//         throw new Error ("Goal Not Found")
//     }
//     //Check for user
//     if(!req.user){
//         res.status(401)
//         throw new error("User not Found")
//     }

//     //Make sure the logged in user
//     if(goal.user.toString() !== req.user.id){
//         res.status(401)
//         throw new error("User not Found")

//     }
//     const updateGoal=await Goals.findByIdAndUpdate(req.params.id,req.body,{
//         new:true,
//     })
//     res.json(updateGoal)
// })
//@desc Get Goals
//@route Delete/api/goals:id
//@access PRIVATE

// const deleteGoals=asyncHandler(async(req,res)=>{
//     const goal=await Goals.findById(req.params.id)

//     if(!goal){
//         res.status(400)
//         throw new Error ("Goal Not Found")
//     }
//     //Check for user
//     if(!req.user){
//         res.status(401)
//         throw new error("User not Found")
//     }

//     //Make sure the logged in user
//     if(goal.user.toString() !== req.user.id){
//         res.status(401)
//         throw new error("User not Found")

//     }
//     await goal.remove()
//     res.json({id:req.params.id})
// })

module.exports = {
	setTests,
	getTests,
	getAllTests,
	getTestDetails
};
