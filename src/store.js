import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import productsReducer from 'slices/users/products';
import { loginSlice } from "slices/users/LoginSlice";
import { appSlice } from "slices/users/AppSlice";

const logger = createLogger();

const store = configureStore({
    reducer: {
        mainprod: mainProductSlice.reducer,
        products: productsReducer,
        login: loginSlice.reducer,
        appLogin: appSlice.reducer
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false,}), logger],
    devTools: true
});

export default store;