import React from 'react'
import ImgBuild from "../assets/imgbuild.jpg"
function Build() {
  return (
    <div className='container my-3 d-flex justify-content-evenly flex-wrap'>
       <div className='buildImage'></div>
       <div className='buildText w-50 '>
        <div className="title"><h1>Continually Harnessing Our Medical Expertise To Build Best Test Offering!</h1></div>
        <div className='description'>
With a belief that knowledge is power, we connect our patients directly with their results so they have valuable health information when they need it most, care about our people and are committed to excellence in the work we do for people to grow and strive for excellence.</div>
       <div className='img   mt-3 d-flex justify-content-between flex-wrap'>
        <img src={ImgBuild} alt="Imgbuild"/>
        <div className='points title'>
            <h5>
<b>Health, Wellness and Insurance</b></h5>
<h5><b>97% customer satisfaction rate</b></h5>
<h5><b>Family Scholarship Program</b></h5>
        </div>
       </div>
       <hr className='mt-3'/>
       </div>

    </div>

  )
}

export default Build