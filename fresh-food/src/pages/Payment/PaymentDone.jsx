import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const PaymentDone = () => {
    const navigate=useNavigate()
  return (
    <div>
        <img style={{width:"70%",height:"100vh",margin:"0 auto"}} src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png" alt="" />
        <Button onClick={()=>navigate("/product")}  style={{color:"green"}}>Done</Button>
    </div>
  )
}

export default PaymentDone