import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { manageOrderSlice } from 'slices/admin/ManageOrderSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        mainprod: mainProductSlice.reducer,
        manageOrder: manageOrderSlice.reducer
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false,}), logger],
    devTools: true
});

export default store;