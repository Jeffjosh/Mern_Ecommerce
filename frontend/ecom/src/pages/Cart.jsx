import React from 'react'
import { useState, useEffect } from 'react'
import "./Cart.css"
import axios from 'axios'

function Cart() {
    const [cart,setcart]=useState([])

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("cart"))||[]
        setcart(data)
    },[])
    const updatecart=(newcart)=>{
        setcart(newcart)
        localStorage.setItem("cart",JSON.stringify(newcart))
    
    }
    const increseqnt=(id)=>{
        const newcart=cart.map((i)=>{
           return i._id===id?{...i,quantity:i.quantity+1}:i
        })
        updatecart(newcart)
    }
    const decreseqnt=(id)=>{
        const newcart=cart.map((i)=>{
           return i._id===id?{...i,quantity:i.quantity-1}:i
        }).filter((i)=>i.quantity>0)
        updatecart(newcart)
        }
    const removecart=(id)=>{
        const newcart=cart.filter((i)=>i._id!==id)
        updatecart(newcart)
    }

    const total=cart.reduce((acc,i)=>acc+i.price*i.quantity,0)

    const checkouthandler=async ()=>{
        const user=JSON.parse(localStorage.getItem("user"))

        console.log(user)
        console.log(user?.token)

        const cart=JSON.parse(localStorage.getItem("cart")) || []
        const totalprice=cart.reduce(
            (acc,item)=>acc+item.price*item.quantity,0
        )
        await axios.post(`${import.meta.env.VITE_API_URL}/orders/create`,{
            orderitems:cart,
            totalprice,
            userid:user._id
        },
        {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
    )
    alert("order placed successfully")
    localStorage.removeItem("cart")
    window.location.reload()

    }
    
  return (
    <div className='cartpage'>
      <h2>Your cart</h2>
      {cart.map((i)=>(
        <div key={i._id} className='cartlist'>
            <div className='cartinfo'>
                <h3>{i.name}</h3>
            <p>Price:{i.price.toFixed(2)}</p>
            <p>Quantity:{i.quantity}</p>
            </div>
            <button onClick={()=>increseqnt(i._id)}>+</button>
            <button onClick={()=>decreseqnt(i._id)}>-</button>
            <button onClick={()=>removecart(i._id)}>Remove</button>
        </div>
      ))}
      <div className='cartsummary'>
        <h3>Total:₹{total}</h3>
        <button onClick={checkouthandler}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
