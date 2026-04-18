import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("user")||"null")
    const handlelogout=()=>{
        localStorage.removeItem("user")
        navigate("/login")
    }
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/">Home</Link>
      </div>
      <div className='right'>
        {!user ?(
        <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
      ):(
        <>
        <span>Welcome, {user.name}</span>
        <Link to="/cart">Cart</Link>
        <button onClick={handlelogout}>Logout</button>
        </>
      )}
      </div>
    </div>
  )
}

export default Navbar
