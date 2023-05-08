import axios from "axios"
import { ADMIN_LOGIN, GET_USER_DATA, USER_LOGIN } from "./actionType"

export const userLogin=(payload)=>{
    return {type:USER_LOGIN,payload}
}
export const getUserData=(dispatch)=>{
    axios.get(`https://fine-puce-hippo-gown.cyclic.app/user`).then((res)=>{
       dispatch({type:GET_USER_DATA,payload:res.data})
    })
}
export const adminLogin=(payload)=>{
    console.log(payload)
    return {type:ADMIN_LOGIN,payload}
}