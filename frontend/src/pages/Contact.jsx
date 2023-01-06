import e from 'cors'
import React from 'react'
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {contacts,reset} from "../features/contact/contactSlice"
import CounterImg from "../assets/counter.jpg"
function Contact() {
const [name,setclientName]=useState("")
const [email,setclientEmail]=useState("")
const [message,setclientMessage]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isLoading,isSuccess,isError}=useSelector((state)=>state.contact)

  useEffect(()=>{
      if(isError){
          toast.error(message)
      }
      dispatch(reset())
 
  },[user,isSuccess,isError,dispatch,navigate])
  
  const onSubmit=(e)=>{
e.preventDefault();

  dispatch(contacts({name,email,message}))
  setclientName("")
  setclientEmail("")
  setclientMessage("")
}
  
  
  return (
    <>
    <h1>Contact Us</h1>
      <div className='mt-4 d-flex justify-content-evenly flex-wrap'>
            <div className='counterImage'>
            <img src={CounterImg} alt="CounterImage" className='counterImg'/>
            </div>
            <div className='counterText'>
            <div className='counterHeading'>
<p className='text-dark mt-4'><b>Appointments may be booked to help reduce your wait time. If you are unable to book an appointment, we do our best to minimize your wait, but the length of your visit will depend on the number of patients in the Patient Service Centre. Typically, wait times are a little longer in the morning as patients tend to fast for tests over night.</b><br/>
To provide a comfortable and safe environment for our patients and employees, please avoid wearing scented perfumes or creams when visiting our Patient Service Centres.</p>
</div>
</div>
            </div>

    <section className='heading container w-50'>
    <h3>Contact us for Any </h3>
    <div className="form-group mt-3">
    <form onSubmit={onSubmit}>
       <input type="text" className='form-control' value={name} name="name" placeholder='Enter Your name' onChange={(e)=>setclientName(e.target.value)}></input>
       <input type="email" className='form-control' value={email} name="email" placeholder='Enter Your Email' onChange={(e)=>setclientEmail(e.target.value)}></input>
      <textarea type="text" className='form-control' value={message} name="message" placeholder='Enter Your Message' onChange={(e)=>setclientMessage(e.target.value)}></textarea>
    
    <div className="form-group d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-block w-50">Submit</button>
    </div>
    </form>
    </div>
       </section>
       </>

  )
}


export default Contact