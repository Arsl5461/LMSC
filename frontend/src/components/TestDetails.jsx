import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { useEffect,useState } from 'react'
import {getTestDetail} from "../features/tests/testSlice"
import {bookings} from "../features/booking/bookingSlice";

function TestDetails() {
  const { test, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.test,
  );

  


    const dispatch=useDispatch();
    const params=useParams();
    

    useEffect(()=>{
      dispatch(getTestDetail(params.id))
     

    },[])
    
  return (
    <>
<h1>{test.testname}</h1>
<h1>{test.testprice}</h1>
<p>{test.description}</p>
<div className="d-flex justify-content-center">
<Link to={`/booktest/${test._id}`} className="btn btn-secondary">
        Book {test.testname}
      </Link>

      
</div>
   </>
  )
}

export default TestDetails