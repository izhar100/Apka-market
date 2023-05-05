import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoSearchOutline,IoCartOutline,IoHeartOutline,IoPersonOutline,IoHome } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import filterPNG from "../assets/filters.png"
const Navbar = () => {
    const [query,setQuery]=useState("")
    const navigate=useNavigate()
    const handleQuery=(e)=>{
     console.log(query)
    }
    const handleFilter=()=>{
        console.log("clicked on filter")
    }
    return (
        <>
            <Flex bgColor={{xl:"#defdff",lg:"#defdff",md:"#defdff",sm:"#defdff",sm:"GhostWhite",base:"GhostWhite"}} pl={"10px"} pr={"10px"} position={"fixed"} w={"100%"} h={"70px"} boxShadow={{xl:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",lg:" rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", md:" rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", sm:"",base:""}}>
                <Flex display={{lg:"flex",xl:"flex",md:"flex",sm:"none",base:"none"}} alignItems={"center"} justifyContent={"center"} w={"15%"} height={"50px"}>
                    <Text as={"b"} fontSize={"20px"} color={"green.600"}>Apka Market</Text>
                </Flex>
                <Flex flexDirection={"row-reverse"} w={{lg:"60%",xl:"60%",md:"60%",sm:"100%",base:"100%"}} alignItems={"center"} pl={{lg:"10px",xl:"10px",md:"10px",sm:"",base:""}} justifyContent={"center"} m={{lg:"",xl:"",md:"",sm:"auto",base:"auto"}}>
                <Box position={"relative"} left={{lg:"90%",xl:"90%",md:"90%",sm:"90%",base:"90%"}}><IoSearchOutline size="20px" color="grey" /></Box>
                    <Input placeholder="search any items..." pl={"40px"} border={"none"} borderRadius={"20px"} bgColor={"white"} onChange={handleQuery} w={"100%"}/>
                    <Box position={"relative"} left={{lg:"90%",xl:"90%",md:"90%",sm:"86%",base:"86%"}}><Image src={filterPNG} w={"20px"} color="grey" onClick={handleFilter} _hover={{cursor:"pointer"}}/></Box>
                </Flex>
                <Flex display={{lg:"flex",xl:"flex",md:"flex",sm:"none",base:"none"}} pl={"20px"} justifyContent={"space-between"} alignItems={"center"} w={"25%"}>
                  <MdHome size="30px" onClick={()=>navigate("/home")} style={{cursor:"pointer"}}/>
                 <IoHeartOutline size="30px" onClick={()=>navigate("/favorite")} style={{cursor:"pointer"}}/>
                 <IoCartOutline size="30px" onClick={()=>navigate("/cart")} style={{cursor:"pointer"}}/>
                 <IoPersonOutline size="30px" onClick={()=>navigate("/profile")} style={{cursor:"pointer"}}/>
                </Flex>
            </Flex>
            <Box position={"fixed"} right={{lg:"80%",xl:"80%",md:"77%",sm:"86%",base:"86%"}} top={"25px"}><IoSearchOutline size="20px" color="grey" /></Box>
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar
