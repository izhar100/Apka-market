
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Slider from './Slider'
import { RxArrowRight } from "react-icons/rx";
import grapsIcon from "../../assets/homePageImages/grapes-icon.png"
import PopularDeals from './PopularDeals';
import { TbCarrot,TbBottle } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import DealNow from './DealNow';
import { useSelector } from 'react-redux';
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "./Slider";
const Home = () => {
  const navigate=useNavigate()
  const favoriteData=useSelector((store)=>store.FavoriteReducer.favoriteData)
  useEffect(()=>{
    localStorage.setItem("favorite",JSON.stringify(favoriteData))
  },[favoriteData])

  return (
    <>
      <Box>
        <Slider />
        <br />
        <Flex width={"90%"} m={"auto"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={{ lg: "25px", xl: "25px", md: "25px", sm: "20px", base: "20px" }} as={"b"}>Categories</Text>
          <RxArrowRight size={"25px"} color='#4a4a4a' />
        </Flex>
        <br />
        <Grid width={"90%"} m={"auto"} gridTemplateColumns={{ lg: "repeat(4,1fr)", xl: "repeat(4,1fr)", md: "repeat(4,1fr)", sm: "repeat(3,1fr)", base: "repeat(3,1fr)" }} gap={{ lg: "40px", xl: "40px", md: "30px", sm: "20px", base: "20px" }}>
          <Box height={"200px"} borderRadius={"20px"} position={"relative"} bgColor={"#ffd0d0"} onClick={()=>navigate("/product")}>
            <Box height={"50%"} bgColor={"#ffd0d0"} borderTopRadius={"20px"}>
              <Text color={"red"} fontSize={"18px"} mb={"0px"}>Fresh</Text>
              <Text color={"red"} as={"b"} fontSize={"18px"}>Fruits</Text>
            </Box>
            <Flex w={"70px"} height={"70px"} justifyContent={"center"} position={"absolute"} bgColor={"#ff4e4e"} p={"10px"} borderRadius={"50%"} top={"70px"} left={{ lg: "37%", xl: "37%", md: "37%", sm: "18%", base: "18%" }}>
              <Image src={grapsIcon} width={"30px"} />
            </Flex>
            <Box w={"100%"} borderRadius={"20px"}>
              <Image src='https://img.freepik.com/premium-photo/red-apples-background-with-water-drops_146936-1713.jpg?w=996' width={"100%"} height={"100px"} borderRadius={"20px"} />
            </Box>
          </Box>
          <Box bgColor={"#fdffd0"} height={"200px"} borderRadius={"20px"} position={"relative"} onClick={()=>navigate("/product")}>
            <Box height={"50%"} bgColor={"#f2ffd0"} borderTopRadius={"20px"}>
              <Text color={"orange"} fontSize={"18px"} mb={"0px"}>Fresh</Text>
              <Text color={"orange"} as={"b"} fontSize={"18px"}>Juice</Text>
            </Box>
            <Flex w={"70px"} height={"70px"} justifyContent={"center"} position={"absolute"} bgColor={"#ffaa00"} p={"10px"} borderRadius={"50%"} top={"70px"} left={{ lg: "37%", xl: "37%", md: "37%", sm: "18%", base: "18%" }}>
            <Box mt={"5px"}>
              <TbBottle size={"40px"}/>
              </Box>
            </Flex>
            <Box w={"100%"} borderRadius={"20px"}>
              <Image src='https://images.healthshots.com/healthshots/en/uploads/2022/02/08134710/JUICES.jpg' width={"100%"} height={"100px"} borderRadius={"20px"} />
            </Box>
          </Box>
          <Box bgColor={"#d0fff6"} height={"200px"} borderRadius={"20px"} position={"relative"} onClick={()=>navigate("/product")}>
            <Box height={"50%"} bgColor={"#defff1"} borderTopRadius={"20px"}>
              <Text color={"#59ff00"} fontSize={"18px"} mb={"0px"}>Organic</Text>
              <Text color={"#66ff00"} as={"b"} fontSize={"18px"}>Vegetables</Text>
            </Box>
            <Flex w={"70px"} height={"70px"} justifyContent={"center"} position={"absolute"} bgColor={"#51ff00"} p={"10px"} borderRadius={"50%"} top={"70px"} left={{ lg: "37%", xl: "37%", md: "37%", sm: "18%", base: "18%" }}>
              {/* <Image src={grapsIcon} width={"30px"} /> */}
              <Box mt={"5px"}>
              <TbCarrot size={"40px"}/>
              </Box>
            </Flex>
            <Box w={"100%"} borderRadius={"20px"}>
              <Image src='https://img.freepik.com/premium-photo/mixed-vegetables-fruits-healthy-food-clean-eating-health_73523-2767.jpg?w=996' width={"100%"} height={"100px"} borderRadius={"20px"} />
            </Box>
          </Box>
          <Box bgColor={"#ffd0d0"} display={{ lg: "block", xl: "block", md: "block", sm: "none", base: "none" }} height={"200px"} borderRadius={"20px"} position={"relative"} onClick={()=>navigate("/product")}>
            <Box height={"50%"} bgColor={"#feffd7"} borderTopRadius={"20px"}>
              <Text color={"#ff8800"} fontSize={"18px"} mb={"0px"}>Dry</Text>
              <Text color={"#ffa200"} as={"b"} fontSize={"18px"}>Fruits</Text>
            </Box>
            <Flex w={"70px"} height={"70px"} justifyContent={"center"} position={"absolute"} bgColor={"#ffca4e"} p={"10px"} borderRadius={"50%"} top={"70px"} left={{ lg: "37%", xl: "37%", md: "37%", sm: "18%", base: "18%" }}>
              <Image src={grapsIcon} width={"30px"} />
            </Flex>
            <Box w={"100%"} borderRadius={"20px"}>
              <Image src='https://media.istockphoto.com/id/1154896831/photo/assorted-nuts-and-dried-fruit-background-organic-food-in-wooden-bowls-top-view.jpg?s=612x612&w=0&k=20&c=g0Xn7NsDzP2b4w3MzG7tNp7D11irOr3BZc3GExgtQXI=' width={"100%"} height={"100px"} borderRadius={"20px"} />
            </Box>
          </Box>
        </Grid>
        <br />
        <Flex width={"90%"} m={"auto"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={{ lg: "25px", xl: "25px", md: "25px", sm: "20px", base: "20px" }} as={"b"}>Popular deals</Text>
          <RxArrowRight size={"25px"} color='#4a4a4a' />
        </Flex>
        <br />
        <PopularDeals/>
        <br />
        <DealNow/>
        <br />
        <br />
      </Box>
      <Slider />
      <br />
    </>
  );
};

export default Home;
