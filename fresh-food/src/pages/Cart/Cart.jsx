import React,{useState,useEffect} from 'react'
import Cartitem from "./CartItem"
import { grid } from '@chakra-ui/react';
const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'));
    if (items) {
     setItems(items);
    }
  }, []);
  return (

      <div className="container">
        <h1>Shoping Cart </h1>
        <div className="cart_item">
          {
            items?.map((el)=>{return <Cartitem key={el.id} product={el}  />})
          }
        </div>
      </div>
    
  )
}

export default Cart
