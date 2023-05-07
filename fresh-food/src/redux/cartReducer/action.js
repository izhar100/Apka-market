import { ADD_TO_CART } from "./actionType"

export const addToCart=(payload)=>{
    return {type:ADD_TO_CART,payload}
}
const initialState = {
    // cart: [],
    cart: [],
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
  };
export const CartProduct=(state,action)=>{

}
