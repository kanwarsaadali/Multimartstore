import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import Error from '../pages/Error'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="home"/>}/>
      <Route path='home'    element={<Home/>}/>
      <Route path='shop'    element={<Shop/>}/>
      <Route path='shop/:id'    element={<ProductDetails/>}/>
      <Route path='checkout'    element={<ProtectedRoute> <Checkout/></ProtectedRoute>}/>
      <Route path='cart'    element={<Cart/>}/>
      <Route path='login'    element={<Login/>}/>
      <Route path='Signup'    element={<Signup/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  
  )
}

export default Routers