import React, { useState,useEffect } from 'react'
import {DeleteIcon} from "@chakra-ui/icons"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQTY, increaseQTY } from '../../redux/cartReducer/action'
import { RiDeleteBin5Line } from "react-icons/ri";
import {useToast} from '@chakra-ui/react'
 function CartItem ({handleRemove,product})  {
  const cartData=useSelector((store)=>store.CartReducer.cartData)
  const dispatch=useDispatch()
  const toast=useToast()
  const [qty,setQty]=useState(product.quantity)
    const handleAdd=(()=>{
        setQty(qty+1)
        const newdata=cartData.map((el)=>{
          if(el.id==product.id){
            el.quantity++;
          }
          return el;
        })
        console.log(newdata)
        dispatch(increaseQTY(newdata))
    })
    const handleReduce=(()=>{
      setQty(qty-1)
      const newdata=cartData.map((el)=>{
        if(el.id==product.id){
          el.quantity--;
        }
        return el;
      })
      console.log(newdata)
      dispatch(decreaseQTY(newdata))

    })
const handleDelete=()=>{
  handleRemove(product.id)
  toast({
    title: 'Product Removed from cart.',
    status: 'error',
    duration: 3000,
    isClosable: true,
    position:'top'
  })
}
const trimmedName = product.name.length ? product.name.substring(0, 15) + "..." : product.name;

  return (
    <TableContainer>
  <Table variant='striped' colorScheme='green'>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Quantity</Th>
        <Th>Subtotal</Th>
        <Th>Remove</Th>
      </Tr> 
    </Thead>
    <Tbody>
      <Tr>
        <Td><img style={{width:"100px",borderRadius:"50%"}} src={product.image} alt={product.id} /></Td>
        <Td>{trimmedName}</Td>
        <Td>₹{product.price}</Td>
        <Td isNumeric>
            <Button isDisabled={qty===1} onClick={handleReduce}>-</Button>
            {qty}
            <Button onClick={handleAdd}>+</Button>
        </Td>
        <Td className='subTotal'>₹{qty*product.price}</Td>
        <Td>
          <Button bgColor={"#ff2600"} _hover={{backgroundColor:"#ff2600"}} color={"white"} onClick={handleDelete}><RiDeleteBin5Line size={"20px"}/></Button></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

  )
}
export default CartItem

// ----------------------------------------------------------------
// import React, { useState } from "react";
// import FormatPrice from "./FormatPrice";
// import CartAmount from "../Cart/CartAmount";
// import { FaTrash } from "react-icons/fa";
// import { useCartContext } from "./Context/Cart_context";

// const Cartitem = ({ id, name, image, color, price, amount }) => {
//   const { removeItem, setDecrease, setIncrement } = useCartContext();

//   // const setDecrease = () => {
//   //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
//   // };

//   // const setIncrease = () => {
//   //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
//   // };

//   return (
//     <div className="cart_heading grid grid-five-column">
//       <div className="cart-image--name">
//         <div>
//           <figure>
//             <img src={image} alt={id} />
//           </figure>
//         </div>
//         <div>
//           <p>{name}</p>
//           <div className="color-div">
//             <p>color:</p>
//             <div
//               className="color-style"
//               style={{ backgroundColor: color, color: color }}></div>
//           </div>
//         </div>
//       </div>
//       {/* price   */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price} />
//         </p>
//       </div>

//       {/* Quantity  */}
//       <CartAmount
//         amount={amount}
//         setDecrease={() => setDecrease(id)}
//         setIncrease={() => setIncrement(id)}
//       />

//       {/* //Subtotal */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price * amount} />
//         </p>
//       </div>

//       <div>
//         <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
//       </div>
//     </div>
//   );
// };

// export default Cartitem;
