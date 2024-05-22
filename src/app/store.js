import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import popupReducer from './popupSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
        popup:popupReducer,

    }
})

export default store