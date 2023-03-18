import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";

import getDataReducer from "../slice/getDataSlice"
const rootReducer = combineReducers(
    {
        getDataReducer,
        cartSlice
    }
)

export default rootReducer