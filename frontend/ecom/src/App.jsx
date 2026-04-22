import React from 'react'
import Home from './pages/home'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protectroute from './Components/Protectroute.jsx'
import Cart from './pages/Cart.jsx'
import Addproduct from './pages/Addproduct.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Protectroute><Home/></Protectroute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Protectroute><Cart/></Protectroute>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
