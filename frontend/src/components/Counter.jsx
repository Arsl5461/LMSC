import React,{useState} from 'react'
import CounterImg from "../assets/counter.jpg"
import CountUp from 'react-countup';

function Counter() {
    const [counter,setCounter]=useState([
        {
            "start":0,
            "end":7154,
            "text":"Tests & Patients Served In 2022"

    },
    {
        "start":0,
        "end":1382,
        "text":"Free Patient Visits Each Month"

},
{
    "start":0,
    "end":163,
    "text":"Specilized Centers in 24 States"

},
{
    "start":0,
    "end":98,
    "text":"Client Satisfaction rate"

},
])
  return (
    <div className='counter'>

        <div className='container mt-4'>
        <p className='active'>Providing High Quality Test Services For Your Health!</p>
        <h1 className='w-50 text-light'>Helping To Deliver Answers For Health Questions.</h1>
        <div className='mt-4 d-flex justify-content-evenly flex-wrap'>
            <div className='counterImage'>
            <img src={CounterImg} alt="CounterImage" className='counterImg'/>
            </div>
            <div className='counterText'>
            <div className='counterHeading'>
<p className='text-light mt-4'><b>Appointments may be booked to help reduce your wait time. If you are unable to book an appointment, we do our best to minimize your wait, but the length of your visit will depend on the number of patients in the Patient Service Centre. Typically, wait times are a little longer in the morning as patients tend to fast for tests over night.</b><br/>
To provide a comfortable and safe environment for our patients and employees, please avoid wearing scented perfumes or creams when visiting our Patient Service Centres.</p>
</div>

</div>
            </div>
            <hr/>
<div className='countup d-flex justify-content-evenly flex-wrap'>
    {counter.map((item)=>{
        return(
            <div className='d-flex flex-column'>
            <div className='number'>
            <CountUp start={item.start} end={item.end} duration={10}/>
        </div>
        <div className='countUpText'>
            <p className='text-light'>{item.text}</p>
        </div>
        </div>         
        )
    })}
   
</div>
    </div>
</div>
  )
}

export default Counter