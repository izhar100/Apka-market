import { ADD_TO_FAVORITE } from "./actionType";

const initState={
  favoriteData: [],
}
export const reducer = (state=initState,{type,payload}) => {
  // Complete the logic
  switch(type){
    case ADD_TO_FAVORITE:{
      return {...state,favoriteData:[...state.favoriteData,payload]}
    }
    default:{
      return state
    }
  }
};
