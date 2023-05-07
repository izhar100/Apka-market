import { ADD_TO_CART } from "./actionType";

const initState={
  cartData: [],
}
export const reducer = (state=initState,{type,payload}) => {

  // Complete the logic
  switch(type){
    case ADD_TO_CART:{
      return {...state,cartData:[...state.cartData,payload]}
    }
    default:{
      return state
    }
  }};
