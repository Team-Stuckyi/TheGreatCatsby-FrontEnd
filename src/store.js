import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { reviewProdInfoSlice } from 'slices/users/ReviewProdInfoSlice';
import { loginSlice } from 'slices/admin/LoginSlice';
import { appSlice } from 'slices/admin/appSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        reviewProdInfo: reviewProdInfoSlice.reducer,
        mainprod: mainProductSlice.reducer,
        login: loginSlice.reducer,
        appLogin: appSlice.reducer,
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});

export default store;
