import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { reviewProdInfoSlice } from 'slices/users/ReviewProdInfoSlice';
import { userLoginSlice } from "slices/users/LoginSlice";
import { appSlice } from "slices/users/AppSlice";
import { adminUserSlice } from 'slices/admin/AdminUserSlice';
// import productsReducer from 'slices/users/products';
import { adminLoginSlice } from 'slices/admin/LoginSlice';
import { adminAppSlice } from 'slices/admin/appSlice';
import { manageOrderSlice } from 'slices/admin/ManageOrderSlice';
import { manageProdSlice } from 'slices/admin/ManageProdSlice';
import { addProdSlice } from 'slices/admin/AddProdSlice';
import { joinMemberSlice } from 'slices/users/JoinSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        reviewProdInfo: reviewProdInfoSlice.reducer,
        mainprod: mainProductSlice.reducer,
        userLogin: userLoginSlice.reducer,
        appLogin: appSlice.reducer,
        adminuser: adminUserSlice.reducer,
        // products: productsReducer,
        adminLogin: adminLoginSlice.reducer,
        adminAppLogin: adminAppSlice.reducer,
        manageOrder: manageOrderSlice.reducer,
        manageProd: manageProdSlice.reducer,
        addProd: addProdSlice.reducer,
        joinMember: joinMemberSlice.reducer
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});

export default store;
