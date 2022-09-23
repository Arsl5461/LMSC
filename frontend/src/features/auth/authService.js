import axios from "axios"

const API_URl="/api/users/"


//REGISTER USER

const register=async(userData)=>{
const response=await axios.post(API_URl,userData)
if(response.data){
localStorage.setItem('user',JSON.stringify(response.data))
}
return response.data
}
//REGISTER USER

const login=async(userData)=>{
    const response=await axios.post(API_URl + 'login',userData)
    if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
    }

//Logout
const logout=()=>{
    localStorage.removeItem('user')
}

const authService={
    register,
    logout,
    login,
}

export default authService