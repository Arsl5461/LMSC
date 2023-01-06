import React from 'react'
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux'
import { getTests } from '../features/tests/testSlice';
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
function Cards() {
    const dispatch=useDispatch();
    const params=useParams();
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
    <Link to={`/test/${item._id}`} className="btn btn-secondary"> Details</Link>
    </div>
                    </div>
        )
        
    })}
    </div>
    <div className='d-flex justify-content-center'>
    <Link to={`/test/all`} className="btn btn-secondary mt-3"> View All</Link>
    </div>
  </div>
    <hr/>
    </>
  )
}

export default Cards