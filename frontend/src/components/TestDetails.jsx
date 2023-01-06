import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getTestDetail} from "../features/tests/testSlice"
function TestDetails() {
    const dispatch=useDispatch();
    const params=useParams();
    const { tests, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.test,
      );
    useEffect(()=>{
        dispatch(getTestDetail(params.id))
      

    },[])
    console.log(tests);
  return (
    <>
   <h1>{tests.testname}</h1>
   <p>{tests.testprice}</p>
   <p>{tests.description}</p>
   </>
  )
}

export default TestDetails