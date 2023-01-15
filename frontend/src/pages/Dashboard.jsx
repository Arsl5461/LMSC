import {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import { getUserTests,reset } from '../features/userTest/userTestSlice'

function Dashboard() {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const {user}=useSelector((state)=>state.auth)
    const {tests,isLoading,isError,isSuccess,message}=useSelector((state)=>state.usertest)


    console.log(user);


  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    if(!user){
      navigate("/")
    }
    dispatch(getUserTests())


  
  },[user,navigate,isError,message,dispatch])
  return (
   <section className="heading">
    <h1>Welcome  {user.name}</h1>
   {tests.length > 0 ? (
    <div className='goals'>
    {tests.map((goal)=>(
    <GoalItem key={goal._id} goal={goal}/>
   ))}
   </div>
   ):
    ("There are No Recent Tests")}
   </section>
  )
}

export default Dashboard