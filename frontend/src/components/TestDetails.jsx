import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import {getTestDetail} from "../features/tests/testSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {bookings} from "../features/booking/bookingSlice"

function TestDetails() {
  const { test, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.test,
  );
  const [show, setShow] = useState(false);
  const [name,setName]=useState();
  const [phone,setPhone]=useState();
  const [date,setDate]=useState();
  const [time,setTime]=useState();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const params=useParams();
    

    useEffect(()=>{
      dispatch(getTestDetail(params.id))
     

    },[])
    const testName=test.testname;
    const handleSubmit=(e)=>{
e.preventDefault();
console.log(name);
console.log(phone);
console.log(time);
console.log(date);
console.log(test.testname);
dispatch(bookings({name,phone,time,date,testName}))
setShow(false)
    }
  return (
    <>
<h1>{test.testname}</h1>
<h1>{test.testprice}</h1>
<p>{test.description}</p>
<div className="d-flex justify-content-center">
<Button variant="primary" onClick={handleShow} className="mb-3">
        Book {test.testname}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{test.testname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{test.description}
        <div className="d-flex justify-content-between mt-3 flex-wrap" >

          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Patient name" className='w-50'/> 
          <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Patient number" className='w-50'/> 
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-50 mt-3"/>
        <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-50 mt-3"/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Book Test
          </Button>
        </Modal.Footer>
      </Modal>
</div>
   </>
  )
}

export default TestDetails