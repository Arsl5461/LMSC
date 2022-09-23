import {useEffect} from 'react'
import "./cards.css"
import {useSelector,useDispatch} from "react-redux"
import {getAllGoals} from "../features/goals/goalSlice"
import moment from "moment"
function Cards() {
  const dispatch=useDispatch();
const {goals}=useSelector((state)=>state.goals)
console.log(goals);
  useEffect(()=>{
 const abc=dispatch(getAllGoals())
 console.log(abc);
  },[dispatch])
  return (
    <div className="container2">
      {goals.map((goal)=>(
        <div className="card">
    <div className="card-header">
      <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">{goal.category}</span>
      <h4 className='left'>
       {goal.text}
      </h4>
      <p className='left'>
{goal.body}
      </p>
      <div className="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div className="user-info">
          <h5>{goal.name}</h5>
          <small>{moment(goal.createdAt).startOf().fromNow()}</small>
        </div>
      </div>
    </div>
  </div>
      ))}
  
  
  </div>
 
  
 
    
  )
}

export default Cards