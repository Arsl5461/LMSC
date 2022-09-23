import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {createGoal} from "../features/goals/goalSlice"
function GoalForm() {
   const[text,setText]=useState('')
   const [body,setBody]=useState('')
   const [category,setCategory]=useState("")
const dispatch=useDispatch()
    
      
const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(createGoal({text,body,category}))
    setText('')
    setBody('')
    setCategory("")
    }

  return (
    <div className="form-group">
    <form onSubmit={onSubmit}>
      <label>Blog Title:</label>
<input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Title"/>
<label>Blog Description:</label>
<textarea type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Enter Description"/>
<label>
  Category:
</label>
<select value={category} onChange={(e)=>setCategory(e.target.value)}>
  <option value="health">Health</option>
  <option value="nutrition">Nutrition</option>
  <option value="medicine">Medicine</option>
  <option value="science">Science</option>

</select>

<button className='btn btn-block'> Submit Your Blog</button>
    </form>
  </div>
  )
}

export default GoalForm