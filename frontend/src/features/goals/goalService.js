import axios from "axios"

const API_URl="/api/goals/"
const API_ALLGOALS="/api/allGoals"


//Create new goal

const createGoal=async(goalData,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
const response=await axios.post(API_URl +'user',goalData,config)
return response.data
}

//Get User Goals

const getGoal=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
const response=await axios.get(API_URl + 'user',config)
return response.data
}
// Get All Goals
const getAllGoal=async()=>{
    
const response=await axios.get(API_ALLGOALS)
return response.data
}
//Delete goal

const deleteGoal=async(goalId,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
const response = await axios.delete(API_URl + goalId ,config)
return response.data
}
const goalService={
    createGoal,
    getGoal,
    deleteGoal,
    getAllGoal,
}

export default goalService