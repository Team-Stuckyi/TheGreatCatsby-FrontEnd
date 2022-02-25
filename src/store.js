import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        mainprod: mainProductSlice.reducer,
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false,}), logger],
    devTools: true
});

export default store;