import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"
import configReducer from "./configSlice";
import restaurantsReducer from "./restaurantsSlice";

const appStore = configureStore({
    reducer: {
        cart : cartReducer,
        user: userReducer,
        config:configReducer,
        restaurants:restaurantsReducer,
    }
   
    
});


export default appStore;