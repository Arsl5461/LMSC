import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {reset,logout} from "../features/auth/authSlice" 
function Navbar() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const onclicked=()=>{
        dispatch(logout())
        dispatch(reset())
    }
    const onclick=()=>{

        navigate("/add-form")
    }
  return (
   <div className="header">
    <div className="logo">
        <Link to="/">ISLAMABAD LABORTORY</Link>
    </div>
    <ul>
    {user?<>
        <li>
            <button className='btn btn-block' onClick={onclicked} >
                Logout
            </button>
            
        </li>
    </>:<>
    <li>
            <Link to="/">Home</Link>
        </li>
    <li>
            <Link to="/about-us">About Us</Link>
        </li>
    <li>
            <Link to="/contact-us">Contact Us</Link>
        </li>
    <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/register">SignUp</Link>
        </li>
    </>}
    </ul>
   </div>
  )
}

export default Navbar