import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./Addproduct.css"

function Addproduct() {
    const [form,setform]=useState({
        name:'',
        price:'',
        description:'',
        image:'',
        countinstock:''

    })

    const user=JSON.parse(localStorage.getItem("user"))

    const handlechange=(e)=>{
        setform({
            ...form,[e.target.name]:e.target.value
        })
    }

    const handlesubmit=async (e)=>{
        e.preventDefault()
        await axios.post(`${import.meta.env.VITE_API_URL}/products/addproduct`,form,
          {
            headers:{
              Authorization:`Bearer ${user?.token}`
            }
          }
        )
        alert("product added successfull")
    }

  return (
    <div className='addproduct-page'>
      <div className='addproduct-card'>
        <h2>Add Products</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='product name' onChange={handlechange}/>
        <input type="text" name='price' placeholder='product price' onChange={handlechange}/>
        <input type="text" name='description' placeholder='product description' onChange={handlechange}/>
        <input type="text" name='image' placeholder='product image' onChange={handlechange}/>
        <input type="text" name='countinstock' placeholder='count in stock' onChange={handlechange}/>
        <button type="submit">Add Product</button>
      </form>
      </div>
    </div>
  )
}

export default Addproduct
