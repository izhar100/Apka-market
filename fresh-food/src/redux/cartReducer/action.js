import { ADD_TO_CART, REMOVE_FROM_CART, SET_DECREMENT, SET_INCREMENT } from "./actionType"

export const addToCart=(payload)=>{
    return {type:ADD_TO_CART,payload}
}
export const removeFromCart=(payload)=>{
  return {type:REMOVE_FROM_CART,payload}
}
export const increaseQTY=(payload)=>{
  return {type:SET_INCREMENT,payload}
}
export const decreaseQTY=(payload)=>{
  return {type:SET_DECREMENT,payload}
}
