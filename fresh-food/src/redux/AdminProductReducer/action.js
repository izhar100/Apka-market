import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_FAILURE } from "./actionTypes"
import { deleteProductApi } from "./api";

export const addData = (data) => async(dispatch) => {
    dispatch({type: PRODUCT_REQUEST});
    await axios
    .post("https://fine-puce-hippo-gown.cyclic.app/product", data)
    .then(() => {
        dispatch({type: ADD_PRODUCT_SUCCESS});
    })
    .catch(()=>{
        dispatch({type: PRODUCT_FAILURE});
    });
}

export const getProducts = (paramObj) => async(dispatch) => {
    console.log(paramObj)
    dispatch({type: PRODUCT_REQUEST})

    await axios.get('https://fine-puce-hippo-gown.cyclic.app/product', paramObj)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch(() => {
        dispatch({type: PRODUCT_FAILURE})
    })
}
export const editProduct = (dataObj, id) => async(dispatch) => {
    dispatch({type: PRODUCT_REQUEST})

    await axios
    .patch(`https://fine-puce-hippo-gown.cyclic.app/product/${id}`, dataObj)
    .then(() => {
        dispatch({type: PATCH_PRODUCT_SUCCESS})
    })
    .catch(()=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}

export const deleteProduct = (id) => async(dispatch) => {
    dispatch({type: DELETE_PRODUCT_LOADING})
    try {
        await deleteProductApi(id)
    }
    catch(err){
        dispatch({type:DELETE_PRODUCT_FAILURE})
    }
    dispatch(getProducts())
}