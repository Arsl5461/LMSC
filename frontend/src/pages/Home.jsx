import {useEffect} from 'react'
import Cards from "../components/Cards"
import {useSelector,useDispatch} from "react-redux"
import {getAllGoals} from "../features/goals/goalSlice"
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {goals,isError,message}=useSelector((state)=>state.goals)
  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    dispatch(getAllGoals())


  
  },[])
  return (
    <>
    <h1>Home</h1>
    {goals.length>0?( <Cards/>):(<p>No Blogs To Show</p>)}
    
   
    </>
  )
}

export default Home