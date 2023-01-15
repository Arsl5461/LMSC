import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import {getTestDetail} from "../features/tests/testSlice"
import {bookings} from "../features/booking/bookingSlice";
function BookTest() {
  const { test, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.test,
  );
  const dispatch=useDispatch();
  const params=useParams();
  useEffect(()=>{
    dispatch(getTestDetail(params.id))
   console.log(test);

  },[])
  const [name,setName]=useState();
    const [phone,setPhone]=useState();
  const [date,setDate]=useState();
  const [time,setTime]=useState();
    const testName=test.testname;
    const handleSubmit=(e)=>{
e.preventDefault();
dispatch(bookings({name,phone,time,date,testName}))
setName("")
setPhone("")
setDate("")
setTime("")
    }
  return (
<>
    {test.testname}
        
    {test.description}
    <div className="d-flex justify-content-between mt-3 flex-wrap" >

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Patient name" className='w-50'/> 
      <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Patient number" className='w-50'/> 
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-50 mt-3"/>
<select type="time" value={time} onChange={(e)=>setTime(e.target.value)}>
<option value="8">8:00</option>
<option value="9">9:00</option>
<option value="10">10:00</option>
<option value="11">11:00</option>
<option value="12">12:00</option>
<option value="13">13:00</option>
<option value="14">14:00</option>
<option value="15">15:00</option>
<option value="16">16:00</option>
<option value="17">17:00</option>
<option value="18">18:00</option>
<option value="19">19:00</option>
<option value="20">20:00</option>
<option value="21">21:00</option>
<option value="22">22:00</option>
<option value="23">23:00</option>

</select>
    </div>
  
      <Button variant="secondary">
        Close
      </Button>
      <Button variant="primary">
        Book Test
      </Button>
      </>
  )
}
  
  
  


export default BookTest