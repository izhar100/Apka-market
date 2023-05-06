import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const DealNow = () => {
    return (
        <>
            <Box position={"relative"} w={"90%"} m={"auto"} borderRadius={"20px"}>
                <Box p={"20px"} bgColor={"#2d2d2da1"} borderRadius={"20px"} position={"absolute"} top={"30%"} right={"5%"} left={"5%"} textAlign={"center"}>
                    <Text color={"#ffffff"} fontSize={{lg:"35px",xl:"35px",md:"35px",sm:"15px",base:"15px"}} as={"b"}>Shop now and Get 30% off on Fruits and Vegetables</Text>
                    <br />
                    <Text fontSize={{lg:"35px",xl:"35px",md:"35px",sm:"15px",base:"15px"}} color={"#00ffe5"} as={"b"}>Delivery time between 1-2 hours</Text>
                </Box>
                <Image src='https://www.weliahealth.org/wp-content/uploads/2021/03/fruitsveggies-1620x600-1.jpg' w={"100%"} h={"50%"} borderRadius={"20px"} />
            </Box>
        </>
    )
}

export default DealNow
