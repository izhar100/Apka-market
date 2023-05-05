import React from 'react'
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
 function CartItem ({product})  {
    const handleAdd=((quantity)=>{
        
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
            <Button>-</Button>
            {product.quantity}
            <Button onClick={handleAdd}>+</Button>
        </Td>
        <Td>₹{product.subtotal}</Td>
        <Td><Button>Delete</Button></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  )
}
export default CartItem
