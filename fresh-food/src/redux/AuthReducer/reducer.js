import { ADMIN_LOGIN, GET_USER_DATA, LOG_OUT, USER_LOGIN } from "./actionType";

const initState={
    userData:[],
    userAuth:localStorage.getItem("userAuth")||false,
    adminAuth:localStorage.getItem("adminAuth")||false
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_USER_DATA:{
            return {...state,userData:payload}
        }
        case USER_LOGIN:{
            return {...state,adminAuth:false,userAuth:payload}
        }
        case ADMIN_LOGIN:{
            return {...state,userAuth:false,adminAuth:payload}
        }
        case LOG_OUT:{
            return {...state,adminAuth:payload,userAuth:payload}
        }
        default:{
            return state;
        }
    }
}