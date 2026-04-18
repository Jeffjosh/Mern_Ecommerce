import axios from 'axios'
import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'


function Login() {
  const [form,setform]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    
    try{
      const res=await axios.post(`${import.meta.env.VITE_API_URL}/users/login`,form)
      localStorage.setItem("user",JSON.stringify(res.data))
      alert("Login successful")
      navigate("/")


    }catch(err){
      alert("Invalid credentials")
      console.log("err",err)
    }
  }

  return (
    <div className='loginback'>
          <div className="login">
      <h2>user login</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" name='email' placeholder='email' onChange={handlechange}/>
        <input type="password" name='password' placeholder='password' onChange={handlechange}/>
        <button type='submit'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
