import { ADMIN_LOGIN, GET_USER_DATA, USER_LOGIN } from "./actionType";

const initState={
    userData:[],
    userAuth:false,
    adminAuth:false
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
        default:{
            return state;
        }
    }
}