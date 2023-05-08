import { SPLACE } from "./actionType";

const initsplace=localStorage.getItem("splace")||false;
export const reducer=(state=initsplace,{type,payload})=>{
    switch(type){
        case SPLACE:{
            localStorage.setItem("splace",true);
            return state=true;
        }
        default:{
            return state;
        }
    }
}