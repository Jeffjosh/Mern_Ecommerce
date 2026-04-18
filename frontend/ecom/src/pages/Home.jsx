import React from 'react'
import{ useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar.jsx'
import "./Home.css"

function Home() {
  const [products,setproducts]=useState([])

  const fetchproducts=async()=>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    setproducts(res.data)
  }

    useEffect(()=>{
    fetchproducts()
  },[])
  
  const addtocart=(product)=>{
    let cart=JSON.parse(localStorage.getItem("cart"))||[]
    const exist=cart.find((i)=>i._id===product._id)

    if(exist){
      cart=cart.map((i)=>{
      return  i._id===product._id?{...i,quantity:i.quantity+1}:i
      })

    }
    else{
      cart.push({...product,quantity:1})
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added to cart")
  }
  return (
    <div className='home'>
      <Navbar/>
      <h2>All Products</h2>
      <div className='container'>
        {products.map((i)=>(
        <div key={i._id} className='card'>
          <h3>{i.name}</h3>
          <p>{i.price}</p>
          <img src={i.image} alt="" />
          <p>{i.description}</p>
          <button onClick={()=>addtocart(i)}>Add to cart</button>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Home
