import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllTests } from '../features/tests/testSlice';
import { useEffect } from 'react';
import {Link} from "react-router-dom"
function AllTest() {
    const dispatch=useDispatch();
    const {tests}=useSelector(state=>(state.test))
    useEffect(()=>{
    dispatch(getAllTests())
    },[])
  return (
   <>
   <div className='d-flex justify-content-evenly flex-wrap'>
   {tests.map((item)=>{
    return(
        <div className='card mt-3' key={item._id}>
        <div className='title p-2 mt-4'>
            <h5><b>{item.testname}</b></h5>
            <h5><b>{item.testprice}</b></h5>
        
            </div>
            <div className='description p-2'>
            {item.description.substring(0,50)}
            </div>
            <div className='d-flex mt-3 justify-content-center '>
            <Link to={`/test/${item._id}`} className="btn btn-secondary"> Details</Link>
            </div>
                            </div>
    )
   })}
   </div>
   </>
  )
}

export default AllTest