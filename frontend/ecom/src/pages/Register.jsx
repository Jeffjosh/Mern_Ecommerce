import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Register.css"

function Register() {
  const [form,setform]=useState({
    name:'',
    email:'',
    password:''
  })
  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handlesubmit=async (e)=>{
    e.preventDefault()
    await axios.post(`${import.meta.env.VITE_API_URL}/users/register`,form)
    alert("Registration successful")
  }
  return (
    <div className='regback'>
      <div className="register">
      <h2>User Register</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='Name' onChange={handlechange} />
        <input type="text" name='email' placeholder='email' onChange={handlechange} />
        <input type="text" name='password' placeholder='password' onChange={handlechange} />
        <button type='submit'>Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register
