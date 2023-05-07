import { ADD_TO_CART, REMOVE_FROM_CART, SET_DECREMENT, SET_INCREMENT } from "./actionType";
const initialState=JSON.parse(localStorage.getItem('cart'))||[]
const initState={
  cartData: initialState,
}
export const reducer = (state=initState,{type,payload}) => {

  // Complete the logic
  switch(type){
    case ADD_TO_CART:{
      return {...state,cartData:[...state.cartData,payload]}
    }
    case REMOVE_FROM_CART:{
      return {...state,cartData:payload}
    }
    case SET_INCREMENT:{
      return {...state,cartData:payload}
    }
    case SET_DECREMENT:{
      return {...state,cartData:payload}
    }
    default:{
      return state
    }
  }};
