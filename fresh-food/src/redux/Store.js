import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as CartReducer } from "./cartReducer/reducer";
import { reducer as FavoriteReducer } from "./favoriteReducer/reducer";
import {reducer as AdminProductReducer} from './AdminProductReducer/reducer'

import thunk from "redux-thunk";
const rootReducer=combineReducers({
    AuthReducer,
    ProductReducer,
    CartReducer,
    AdminProductReducer,
    FavoriteReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
