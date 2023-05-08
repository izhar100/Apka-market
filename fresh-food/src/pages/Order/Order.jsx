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
  DrawerFooter,
  useToast
} from '@chakra-ui/react'
import { color } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
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
  const [name, setName] = useState('')
  const [email,setEmail]=useState("")
  const [phone, setPhone] = useState('')
  const [zip, setZip] = useState('')
  const [city,setCity]=useState("")
  const [cardName,setcardName]=useState("")
  const [cardNumber,setCardNumber]=useState("")
  const [cardDate,setCardDate]=useState("")
  const [cardCvv,setCardCvv]=useState("")
  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)
  const handleZipChange = (e) => setZip(e.target.value)
  const handleCityChange = (e) => setCity(e.target.value)

  const handleCardNameChange = (e) => setcardName(e.target.value)
  const handleCardNumberChange = (e) => setCardNumber(e.target.value)
  const handleCardDateChange = (e) => setCardDate(e.target.value)
  const handleCardCvvChange = (e) => setCardCvv(e.target.value)
  const isError = Input === ''
  const[shoppingTotal,setShoppingTotal]=useState([])
  useEffect(() => {
    const shoppingTotal = JSON.parse(localStorage.getItem('total'));
    if (shoppingTotal) {
      setShoppingTotal(shoppingTotal);
  }
},[])

const Toast=useToast()
const handleWarning=(e)=>{
  e.preventDefault()
  if(name==""){
    Toast({
      title: 'Please enter your name.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if (email==""){
    Toast({
      title: 'Please enter your Email.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if (phone==""){
    Toast({
      title: 'Please enter your Phone No..',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if (zip==""){
    Toast({
      title: 'Please enter your zip-code.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if (city==""){
    Toast({
      title: 'Please enter your city.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else{
    const warningData={
      name,
      email,
      phone,
      zip,
      city
    }
    onOpen()
    //console.log(warningData)
  }

}
const toast=useToast()
const handlePaymentOption=(el)=>{
  el.preventDefault()
  if(cardName==""){
    toast({
      title: 'Please enter your name.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if(cardNumber==""){
    toast({
      title: 'Please enter your Card Number.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if(cardDate==""){
    toast({
      title: 'Please enter your Month/Year format.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else if(cardCvv==""){
    toast({
      title: 'Please enter your CVV.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
  else{
    const PaymentModeData={
      cardName,
      cardNumber,
      cardDate,
      cardCvv,
      
    }
    navigate("/payment")
    console.log(PaymentModeData)
  }
}
const [payment,setPayment]=useState('Card Payment')
//console.log(payment)

  return (
   <div className='ordder_page_container'>
     <div     className='shipping_address' style={style}>
      <h1>Shipping Address</h1>
    <FormControl isInvalid={isError}>
      <FormLabel>Your Name</FormLabel>
      <Input type='email' value={name} onChange={handleNameChange} isRequired />
      {!isError ? (
        <FormHelperText>
          Enter your Name....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
       {/* <FormLabel>Your E-mail</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your Email-Address....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
      <FormLabel>Your E-mail</FormLabel>
      <Input type='email' value={email} onChange={handleEmailChange} isRequired />
      {!isError ? (
        <FormHelperText>
          Enter your Email-Address....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Your Phone</FormLabel>
      <Input type='number' value={phone} onChange={handlePhoneChange} isRequired/>
      {!isError ? (
        <FormHelperText>
          Enter your Phone....
        </FormHelperText>
      ) : (
        <FormErrorMessage>Phone no. is required.</FormErrorMessage>
      )}
      <FormLabel>Zip Code</FormLabel>
      <Input type='number' value={zip} onChange={handleZipChange} isRequired />
      {!isError ? (
        <FormHelperText>
          Zip Code...
        </FormHelperText>
      ) : (
        <FormErrorMessage>Zip Code is required.</FormErrorMessage>
      )}
      <FormLabel>Your City</FormLabel>
      <Input type='text' value={city} onChange={handleCityChange} isRequired/>
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
  <Button style={bttn_style}  onClick={handleWarning } isRequired>
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
            <div style={{textAlign:"justify",height:"200px",width:"200px",border:"0px solid black",
          padding:"10px",
          }}>
            <p>Price Summary</p>
            <hr />
            <p>Cart Total: ₹{shoppingTotal}</p>
            <p>Shipping Fee: ₹500</p>
            <hr />
            <p>Total Amount: ₹{shoppingTotal+500}</p>
            </div>
            
            <Stack spacing='24px'>
            <Box>
                <img src="https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74365.jpg?w=2000"/>
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Select Payment Method</FormLabel>
                <Select onChange={(e)=>setPayment(e.target.value)} value={payment} id='owner' defaultValue='segun'>
                  <option value='Card Payment'>Card Payment</option>
                  <option value='cash on delivery'>Cash on Delivery</option>
                </Select>
              </Box>
              <Box display={payment=="cash on delivery"? "none" : "block"}>
              <Box >
                <FormLabel htmlFor='name'>Name of Owner</FormLabel>
                <Input
                value={cardName}
                onChange={handleCardNameChange}
                  ref={firstField}
                  id='username'
                  placeholder='Name of Owner'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='number'>Card Number</FormLabel>
                <InputGroup>
                  <Input
                  value={cardNumber}
                  onChange={handleCardNumberChange}
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
                  
                  value={cardDate}
                  onChange={handleCardDateChange}
                  style={{marginRight:"10px"}}
                    type=''
                    id='url'
                    placeholder='Month/Year'
                  />
                  <Input
                  value={cardCvv}
                  onChange={handleCardCvvChange}
                    type='number'
                    id='url'
                    placeholder='CVV'
                  />
                </InputGroup>
              </Box>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
           <Button onClick={handlePaymentOption} style={bttn_style}>MakePayment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </FormControl>
    </div>
   </div>
  )
}
export default OrderPage