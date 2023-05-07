import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

export const getProducts =(allParams)=>(dispatch) => {
  console.log(allParams)
  // Write logic here
  dispatch({type:PRODUCT_REQUEST})
  axios.get(`https://fine-puce-hippo-gown.cyclic.app/product`,allParams).then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
  }).catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
  })
};