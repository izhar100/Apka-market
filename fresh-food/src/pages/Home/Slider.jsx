import React from 'react'
import banner1 from "../../assets/homePageImages/banner-image1.jpg"
import banner2 from "../../assets/homePageImages/banner2.jpg"
import banner3 from "../../assets/homePageImages/bannerImage3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import { Box, Flex, Image, Text } from '@chakra-ui/react'
const Slider = () => {
    return (
        <Box p={"10px"} className='homePage' w={"90%"} m={'auto'} color={"black"}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Text as={"b"} fontSize={{lg: "30px", xl: "30px", md: "30px", sm: "20px", base: "20px"}} color={"#fc5603"} style={{position:"absolute",top:"10%",left:"5%"}}>10% off on your first purchase</Text>
                    <Image className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        w={"100%"}
                        h={{ lg: "500px", xl: "500px", md: "500px", sm: "300px", base: "250px" }}
                        borderRadius={"20px"}
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Text as={"b"} fontSize={{lg: "30px", xl: "30px", md: "30px", sm: "20px", base: "20px"}} color={"#5efc03"} style={{position:"absolute",top:"10%",left:"5%"}}>Quick Derlivery Record</Text>
                    <Image
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        w={"100%"}
                        h={{ lg: "500px", xl: "500px", md: "500px", sm: "300px", base: "250px" }}
                        borderRadius={"20px"}
                    />
                </Carousel.Item>
                <Carousel.Item>
                <Text as={"b"} fontSize={{lg: "30px", xl: "30px", md: "30px", sm: "20px", base: "20px"}} color={"#8a1818"} style={{position:"absolute",top:"10%",left:"5%"}}>Cash on Delivery available</Text>
                    <Image
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        w={"100%"}
                        h={{ lg: "500px", xl: "500px", md: "500px", sm: "300px", base: "250px" }}
                        borderRadius={"20px"}
                    />
                </Carousel.Item>
            </Carousel>
        </Box>
    )
}

export default Slider
