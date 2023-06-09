import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../redux/favoriteReducer/action';
import {useToast} from '@chakra-ui/react'

const ProductCart = ({product}) => {
    const userAuth=useSelector((store)=>store.AuthReducer.userAuth)
    const dispatch=useDispatch()
    const toast = useToast()
    const navigate=useNavigate()
    const handleAdd=()=>{
        if(userAuth===false){
            toast({
                title: 'Please Login First.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position:'top'
              }) 
              navigate("/login") 
        }else{
            dispatch(addToCart(product))
            toast({
                title: 'Product Added to cart.',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
        }
    }
    const handleFavorite=()=>{
        dispatch(addToFavorite(product))
        toast({
            title: 'Product Added to Favorite.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
    }
    return (
        <Flex flexDirection={"column"} gap={"2px"}>
            <Box borderTopRadius={"20px"} p={"10px"} backgroundColor={"#f4f4f4"} textAlign={"center"}>
                <Flex justifyContent={"right"}>
                    <IoHeartOutline size="20px" color={"606060"} onClick={handleFavorite}/>
                </Flex>
                <Link to={`/product/${product.id}`}>
                    <Image src={product.image} borderRadius={"50%"} m={"auto"} w={"60%"} />
                    <Text color={"#606060"}>₹ {product.price}</Text>
                    <Text noOfLines={1} as={"b"}>{product.name}</Text>
                    <Text color={"#606060"}>{product.quantity} kg</Text>
                </Link>
            </Box>
            <Button backgroundColor={"#f4f4f4"} borderRadius={"none"} borderBottomRadius={"20px"} color={"#606060"} onClick={handleAdd}><IoCartOutline color={"#00d100"} size="25px"/>Add to cart</Button>
        </Flex>
    )
}

export default ProductCart
