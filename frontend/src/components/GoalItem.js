import {useDispatch} from "react-redux"
import {deleteGoal} from "../features/goals/goalSlice"
import moment from "moment"
function GoalItem({goal}) {
    const dispatch=useDispatch()
  return (
    <div className="goal">
       <div>
        <small>{moment(goal.createdAt).startOf().fromNow()} </small>
     
         </div>
         <p>{goal.text}</p>
         <button onClick={()=>dispatch(deleteGoal(goal._id))} className='close'>X</button>
         </div>
  )
}

export default GoalItem