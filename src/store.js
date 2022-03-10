import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { manageProdSlice } from 'slices/admin/ManageProdSlice';
import { addProdSlice } from 'slices/admin/AddProdSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        mainprod: mainProductSlice.reducer,
        manageProd: manageProdSlice.reducer,
        addProd: addProdSlice.reducer
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false,}), logger],
    devTools: true
});

export default store;