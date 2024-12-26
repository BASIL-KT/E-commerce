import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishSilce from "./slices/wishSilce";
import cardSlice from "./slices/cartSlice";

const productStore=configureStore({


    reducer:{

        productReducer:productSlice,
        wishReducer:wishSilce,
        cartReducer:cardSlice
    }
})

export default productStore