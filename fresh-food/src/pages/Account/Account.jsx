import { Button, Flex, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Avatar, AvatarBadge} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/AuthReducer/action'
const Account = () => {
    // const userAuth=localStorage.getItem("userAuth")||false;
    // const adminAuth=localStorage.getItem("adminAuth")||false;
    const {userAuth,adminAuth}=useSelector((store)=>{
        return {
            userAuth:store.AuthReducer.userAuth,
            adminAuth:store.AuthReducer.adminAuth
        }
    },shallowEqual)

    console.log("userAuth:",userAuth)
    console.log("adminAuth:",adminAuth)
    const navigate=useNavigate()
    const toast=useToast()
    const dispatch=useDispatch()
    if(userAuth==false && adminAuth==false){
        console.log("inside toast")
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
       dispatch(logOut(false))
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
