import { Button, Flex, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Avatar, AvatarBadge} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Account = () => {
    const userAuth=localStorage.getItem("userAuth"||"adminAuth")||false;
    const navigate=useNavigate()
    const toast=useToast()
    if(userAuth===false){
        toast({
            title: 'Please Login First.',
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position:'top'
          }) 
        navigate("/login")
    }
    const handleClick=()=>{
       
    }
    
    useEffect(()=>{
        if(userAuth===false){
            toast({
                title: 'Please Login First.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position:'top'
              }) 
            navigate("/login")
        }
    },[userAuth])

    return (
        <>
         <Text fontSize={"25px"} as={"b"} textAlign={"center"} mb={"20px"}>Account</Text>
         <hr style={{width:"80%",margin:"auto"}}/>
         <br />
        <Flex w={"80%"} m={"auto"} justifyContent={"center"}>
            <Stack direction='row' spacing={4}>
                <Avatar>
                <Avatar bg='#14ae00' icon={<AiOutlineUser fontSize='1.5rem' />} />
                </Avatar>
            </Stack>
        </Flex>
        <br />
        <Button bg={"#ff3c00"} _hover={{bgColor:"#ff0000"}} color={"white"} onClick={handleClick}>LOG OUT</Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}

export default Account
