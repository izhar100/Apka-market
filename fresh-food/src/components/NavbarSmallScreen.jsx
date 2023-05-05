import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {IoCartOutline,IoHeartOutline,IoPersonOutline} from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const NavbarSmallScreen = () => {
    const navigate=useNavigate()
  return (
    <>
    <Box display={{lg:"none",xl:"none",md:"none",sm:"flex",base:"flex"}} w={"100%"} position={"fixed"} bottom={"0px"} bgColor={"white"} pt={"20px"} borderTopRadius={"50px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"80%"} m={"auto"}>
                  <MdHome size="30px" onClick={()=>navigate("/home")} style={{cursor:"pointer"}}/>
                 <IoHeartOutline size="30px" onClick={()=>navigate("/favorite")} style={{cursor:"pointer"}}/>
                 <IoCartOutline size="30px" onClick={()=>navigate("/cart")} style={{cursor:"pointer"}}/>
                 <IoPersonOutline size="30px" onClick={()=>navigate("/profile")} style={{cursor:"pointer"}}/>
                </Flex>
        </Box>
    </>
  )
}

export default NavbarSmallScreen
