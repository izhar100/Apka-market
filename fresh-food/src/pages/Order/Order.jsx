import React,{useState,useEffect,useRef} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, 
  Select,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Stack,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  DrawerFooter
} from '@chakra-ui/react'
import { color } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const style={
  width:'60%',
  height:'120vh',
border:'1px solid white',
borderRadius:"10px",
margin:"0 auto",
padding:"20px",
backgroundColor:"#e9edff",
boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}
const bttn_style={
  width:"50%",
  backgroundColor:"#59c577",
  color:"white",
}
const OrderPage=()=> {
  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
   <div className='ordder_page_container'>
     <div     className='shipping_address' style={style}>
      <h1>Shipping Address</h1>
    <FormControl isInvalid={isError}>
      <FormLabel>Your Name</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your Name....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
       <FormLabel>Your E-mail</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your Email-Address....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Your E-mail</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your Email-Address....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Your Phone</FormLabel>
      <Input type='number' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your Phone....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Phone no. is required.</FormErrorMessage>
      )}
      <FormLabel>Zip Code</FormLabel>
      <Input type='number' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Zip Code...
        </FormHelperText>
      ) : (
        <FormErrorMessage>Zip Code is required.</FormErrorMessage>
      )}
      <FormLabel>Your City</FormLabel>
      <Input type='text' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your City....
        </FormHelperText>
      ) : (
        <FormErrorMessage>City is required.</FormErrorMessage>
      )}
      <FormLabel>Your Country</FormLabel>
  <Select placeholder='Select country'>
     <option>India</option>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
    <option>US</option>
    <option>UK</option>
    <option>Pakistan</option>
    <option>Bangladesh</option>
    <option>Nepal</option>
  </Select>
  <br />
  <br />
  <Button style={bttn_style} onClick={onOpen}>
        Next
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size={'lg'}
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Payment Page
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
            <Box>
                <img src="https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74365.jpg?w=2000"/>
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Select Payment Method</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Card Payment</option>
                  <option value='kola'>Cash On Delivery</option>
                  <option value='kola'>Upi</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor='name'>Name of Owner</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Name of Owner'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Card Number</FormLabel>
                <InputGroup>
                  <Input
                    type='number'
                    id='url'
                    placeholder='Card Number'
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor='url'></FormLabel>
                <InputGroup>
                  <Input
                  style={{marginRight:"10px"}}
                    type='number'
                    id='url'
                    placeholder='Month/Year'
                  />
                  <Input
                    type='number'
                    id='url'
                    placeholder='CVV'
                  />
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={()=>navigate("/payment")} style={bttn_style}>MakePayment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </FormControl>
    </div>
   </div>
  )
}
export default OrderPage