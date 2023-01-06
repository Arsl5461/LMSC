import React from 'react'
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux'
import { getTests } from '../features/tests/testSlice';
import { useEffect } from 'react';
function Cards() {
    const dispatch=useDispatch();
    const { tests, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.test,
    );
    useEffect(()=>{
dispatch(getTests())
console.log(tests);
    },[])
  return (
    <>
    <div className='mt-3'>
        <div className='d-flex justify-content-evenly flex-wrap'>
        {tests?.map((item,index)=>{
        return(
                <div className='card' key={item._id}>
<div className='title p-2 mt-4'>
    <h5><b>{item.testname}</b></h5>
    <h5><b>{item.testprice}</b></h5>

    </div>
    <div className='description p-2'>
    {item.description.substring(0,50)}
    </div>
    <div className='d-flex mt-3 justify-content-center '>
    <button className='btn btn-outline-secondary'>Details</button>
    </div>
                    </div>
        )
        
    })}
    </div>
    <div className='d-flex justify-content-center'>
    <button className='btn btn-secondary'>View All</button>
    </div>
  </div>
    <hr/>
    </>
  )
}

export default Cards