import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { reviewProdInfoSlice } from 'slices/users/ReviewProdInfoSlice';
import { loginSlice } from 'slices/admin/LoginSlice';
import { appSlice } from 'slices/admin/appSlice';
import { adminUserSlice } from 'slices/admin/AdminUserSlice';
import productsReducer from 'slices/users/products';
import { loginSlice } from "slices/users/LoginSlice";
import { appSlice } from "slices/users/AppSlice";
import { manageOrderSlice } from 'slices/admin/ManageOrderSlice';
import { manageProdSlice } from 'slices/admin/ManageProdSlice';
import { addProdSlice } from 'slices/admin/AddProdSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        reviewProdInfo: reviewProdInfoSlice.reducer,
        mainprod: mainProductSlice.reducer,
        login: loginSlice.reducer,
        appLogin: appSlice.reducer,
        mainprod: mainProductSlice.reducer,
        adminuser: adminUserSlice.reducer,
        products: productsReducer,
        login: loginSlice.reducer,
        appLogin: appSlice.reducer,
        manageOrder: manageOrderSlice.reducer,
        manageProd: manageProdSlice.reducer,
        addProd: addProdSlice.reducer
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});

export default store;
