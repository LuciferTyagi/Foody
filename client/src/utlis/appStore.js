import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"
import configReducer from "./configSlice";
import restaurantsReducer from "./restaurantsSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore({
    reducer: {
        cart : cartReducer,
        user: userReducer,
        config:configReducer,
        restaurants:restaurantsReducer,
        theme:themeReducer,
    }
   
    
});


export default appStore;