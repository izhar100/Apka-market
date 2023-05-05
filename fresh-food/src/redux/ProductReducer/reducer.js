import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  product: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, product: payload };
    }
    default: {
      return state;
    }
  }
};
