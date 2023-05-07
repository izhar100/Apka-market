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
  
  let SubTotal=0

 function CartItem ({handleRemove,product})  {
  const [qty,setQty]=useState(1)
    const handleAdd=(()=>{
        setQty(qty+1)
    })
    const handleReduce=(()=>{
      setQty(qty-1)
    })
     useEffect(()=>{
      const el=document.querySelector(".subTotal")
      console.log(el)
    })


  return (
    <TableContainer>
  <Table variant='striped' colorScheme='green'>
    <TableCaption>Shoping Now </TableCaption>
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
        <Td>{product.name}</Td>
        <Td>₹{product.price}</Td>
        <Td isNumeric>
            <Button isDisabled={qty===1} onClick={handleReduce}>-</Button>
            {qty}
            <Button onClick={handleAdd}>+</Button>
        </Td>
        <Td className='subTotal'>₹{qty*product.price}</Td>
        <Td>
          <Button onClick={()=>handleRemove(product.id)}>Delete</Button></Td>
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
