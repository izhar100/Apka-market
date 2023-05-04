import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SplaceScreen from './splaceScreen/SplaceScreen'
import Home from './Home/Home'
import Login from './LoginSignUpPage/Login'
import SignUp from './LoginSignUpPage/SignUp'
import Product from './Product/Product'
import Favorite from './Favorite/Favorite'
import Cart from './Cart/Cart'
import Order from './Order/Order'
import SingleProduct from './SingleProduct/SingleProduct'
import PageNotFound from './PageNotFound'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplaceScreen/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
