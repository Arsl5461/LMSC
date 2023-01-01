import React from 'react'
import {useState} from "react"
function Cards() {
    const [cardData]=useState([
        {
            "title":"COVID19 Testing Solutions",
            "description":"Tests can be ordered easily by health plan or employer or through some employee.",
            "btnText":"Request test"
        },
        {
            "title":"I'm a Healthcare Provider",
            "description":"Clinical testing partnerships with industry leaders to make patients have diagnostic..",
            "btnText":"Registration"
        },
        {
            "title":"I'm a Patient",
            "description":"Focus on prevention & early identification of potential health conditions to offer suite..",
            "btnText":"Appointment"
        },
    ])
  return (
    <>
    <div className='mt-3'>
        <div className='d-flex justify-content-evenly flex-wrap'>
        {cardData.map((item,index)=>{
        return(
                <div className='card' key={index}>
<div className='title p-2 mt-4'>
    <h5><b>{item.title}</b></h5>
    </div>
    <div className='description p-2'>
    {item.description.trim(0,10)}
    </div>
    <div className='d-flex mt-3 justify-content-center '>
    <button className='btn btn-outline-secondary'>{item.btnText}</button>
    </div>
                    </div>
        )
        
    })}
    </div>
  </div>
    <hr/>
    </>
  )
}

export default Cards