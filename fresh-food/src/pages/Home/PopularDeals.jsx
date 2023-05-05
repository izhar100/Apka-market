import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../../redux/ProductReducer/action'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import ProductCart from '../Product/ProductCart'

const PopularDeals = () => {
  const cartData=useSelector((store)=>store.CartReducer.cartData)
  const [searchParam]=useSearchParams()
  const {isloading,isError,product}=useSelector((store)=>{
    return {
      isloading:store.ProductReducer.isLoading,
      isError:store.ProductReducer.isError,
      product:store.ProductReducer.product
    }
  },shallowEqual)

  const dispatch=useDispatch()
  let allParams={
    params:{
      _sort:"price",
      _order:"asc",
      _limit:8,
      _page:2,
    }
  }
  useEffect(()=>{
    console.log(allParams)
    dispatch(getProducts(allParams))
  },[])
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartData))
},[cartData])
  if(isloading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <br />
      <Grid gridTemplateColumns={{xl:"repeat(4,1fr)",lg:"repeat(4,1fr)",md:"repeat(4,1fr)",sm:"repeat(2,1fr)",base:"repeat(2,1fr)"}} gap={5} w={{xl:"85%",lg:"85%",md:"85%",sm:"95%",base:"95%"}} m={"auto"}>
        {
          product?.map((el)=>{
           return <ProductCart key={el.id} product={el}/>
          })
        }
      </Grid>
      <br />
    </>
  )
}

export default PopularDeals
