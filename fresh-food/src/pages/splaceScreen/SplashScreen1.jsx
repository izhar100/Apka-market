import React, { useState } from "react";
import image_1 from "../../../src/asset/image_1.png";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Login from "../LoginSignUpPage/Login";

const SplashScreen1 = () => {
  const [splace,setSplace]=useState(false)
  const handleClick=()=>{
    setSplace(true)
  }
  if(splace){
    return <Login/>
  }
  return (<>
  <Box h={"100vh"}  bgGradient="linear(to-b, white, #5eff5e)">
    <Box h={"15vh"} mt={"5vh"}>
    <Text as={"b"} fontSize={{lg:"4xl",xl:"4xl",md:"2xl",sm:"xl",base:"xl"}} color={"#00c635"}>
      Welcome to Apka Market
    </Text>
    <Text color={"grey"}><b>A grocery shop</b></Text>
    </Box>
    <Flex justifyContent={"center"} h={"60vh"}>
    <Image src={image_1}/>
    </Flex>
    <Box h={"10vh"} mt={"10vh"}>
    <Button width={{lg:"30%",xl:"30%",md:"30%",sm:"80%",base:"80%"}} bgColor={"#00ff44"} borderRadius={"50px"} color={"white"} p={"5px"} _hover={{backgroundColor:"#00ff44"}} onClick={handleClick}>
      Get Started
    </Button>
    </Box>
  </Box>
  </> 
  );
};

export default SplashScreen1;
