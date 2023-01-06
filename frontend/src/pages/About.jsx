import React from 'react'
import Img from "../assets/lab.jpg"
import {useSelector,useDispatch} from "react-redux"
import {useEffect} from "react"
import { getTimings } from '../features/about/aboutSlice'
function About() {
  const dispatch=useDispatch();
  const {timings,isLoading,isSuccess,isError}=useSelector((state)=>state.about)
  useEffect(()=>{
dispatch(getTimings());
    console.log(timings);
  },[])
  return (
    <>
    <h1>About Us</h1>

    <div className='mt-4 d-flex justify-content-evenly flex-wrap'>
            
            <div className='counterText'>
            <div className='counterHeading'>
<p className='text-dark mt-4'>
  <p>Pathologists review and sign all reports and are available to discuss your results Qualified and<b> well trained technical staff with BSc (MLT), MSc and Mphil degrees
  Hard working support staff ensures a clean and welcoming environment.</b>
  International quality standards are ensured through integrated pathologist/ technical staff teams. Markedly abnormal results are retested free of charge to double-check their accuracy.


</p></p>
</div>
</div>
<div className='counterImage'>
            <img src={Img} alt="CounterImage" className='counterImg'/>
            </div>
            </div>
    <h4>Lab Timings</h4>
    {timings.map((item)=>{
      return(
        <>
        <h3>Mon-Friday</h3> 
        <p><b>{item.openTime}</b>-<b>{item.closeTime}</b></p>
        <h3>Sat-Sun</h3>
        <p>Closed</p>
        
        </>
      )
    })}



<div class="wrapper">
    <div class="pic"></div>
    <p class="header">
    PROF DR. SHAGUFTA HUSSAIN

    </p>
    <p class="contant">
    MBBS, M.PHIL (MICRO)
<br></br><b>MICROBIOLOGIST</b>

    </p>
    
  </div>
  
  <div class="wrapper">
    <div class="pic2"></div>
    <p class="header">
    DR. AAMER MEHMOOD
    </p>
    <p class="contant">MBBS, FCPS-HISTO (PAK)
<br></br>ARC PATH-HISTO (U.K.)
<br></br><b>HISTOPATHOLOGIST
</b>

    </p>
    
  </div>
  <div class="wrapper">
    <div class="pic3"></div>
    <p class="header">
    DR. ATTIKA KHALID
    </p>
    <p class="contant">MBBS, FCPS (HEM)
<br></br><b>HEMATOLOGIST

</b>

    </p>
    
  </div>

            </>
  )
}

export default About