import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Footer = () => {
  const {userAuth,adminAuth}=useSelector((store)=>{
    console.log("in footer",store.AuthReducer.userAuth)
    console.log("in footer",store.AuthReducer.adminAuth)
    return {
      userAuth:store.AuthReducer.userAuth,
      adminAuth:store.AuthReducer.adminAuth
    }
  },shallowEqual)
  const navigate=useNavigate()
  const handleClick=()=>{
    if(userAuth){
      navigate("/profile")
    }else if(adminAuth){
      navigate("/admin")
    }else{
      navigate("/login")
    }
  }
  

  return (
    <>
    <br />
    <Box bgColor={"#e9edff"} pt={"20px"}>
    <Flex w={"90%"} m={"auto"} justifyContent={"space-between"} flexDirection={{lg:"row",xl:"row",md:"row",sm:"column",base:"column"}}>
     <Box>
      <Text as={"b"} fontSize={"20px"}>Apka Market</Text>
      <Text _hover={{cursor:"pointer"}} onClick={handleClick}>{userAuth?"Account":adminAuth?"Admin":"Login"}</Text>
      <Text>About us</Text>
      <Text>Privacy Policy</Text>
      <Text>Term & Condition</Text>
      <Text>Affiliate</Text>
     </Box>
     <Box>
      <Text as={"b"} fontSize={"20px"}>Help</Text>
      <Text>FAQs</Text>
      <Text>Contact us</Text>
      <Text>AM Wallet</Text>
      <Text>Vendor connect</Text>
      <Text>AM Wallet FAQs</Text>
     </Box>
     <Box>
      <Text as={"b"} fontSize={"20px"}>Popular Categories</Text>
      <Text>Fruits</Text>
      <Text>Vegetables</Text>
      <Text>DRY fruits</Text>
      <Text>Juice</Text>
      <Text>Veg food</Text>
     </Box>
    </Flex>
    </Box>
    <Text textAlign={"center"}>Copyright © 2023 Apka Market</Text>
    </>
  )
}

export default Footer
