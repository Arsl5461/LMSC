import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {login,reset} from "../features/auth/authSlice"
import {toast} from "react-toastify"
import GoogleLogin from 'react-google-login';
import axios from 'axios'


function Login() {

    const responseSuccessGoogle = (response) => {
        console.log(response);
    //  axios.post({
    //     url:"http://localhost:5000/api/users/googlelogin",
    //     data:{tokenId:response.tokenId}
    //  }).then(response=>{
    //     console.log("Google Login Successfully",response);
    //  })

      }
    
      const responseErrorGoogle = (response) => {
        console.log(response);
      }
    const [formData,setFormData]=useState({
        email:'',
        password:"",
        
    }
    )
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {user,isLoading,isSuccess,isError,message}=useSelector((state)=>state.auth)
    const {email,password}=formData

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
navigate("/add-form")
}
dispatch(reset())
    },[user,isSuccess,isError,message,dispatch,navigate])
    const onChange=(e)=>{
setFormData((prevstate)=>({
    ...prevstate,
    [e.target.name]:e.target.value,
    })
)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
            const userData={
                email,
                password
            }
            dispatch(login(userData))

           
        }
    
  return (
    <section className='heading'>
    <h1>Login</h1>
    
    <p>Login To Your Account</p>
    <div className="form-group">
    <form onSubmit={onSubmit}>
       <input type="email" className='form-control' value={email} name="email" placeholder='Enter Your Email' onChange={onChange}></input>
       <input type="password" className='form-control' value={password} name="password" placeholder='Enter Your Password' onChange={onChange}></input>
    <div className="form-group">
        <button type="submit" className="btn btn-block">Submit</button>
    </div>
    </form>
    <GoogleLogin
    clientId="894155198746-3vu7s6k2ii7db2c3m4cqmt7mibjkmptg.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
    
       </section>
  )
}

export default Login