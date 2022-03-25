import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
//사용자 페이지
import { appSlice } from 'slices/users/AppSlice';
import { userLoginSlice } from 'slices/users/LoginSlice';
import { joinMemberSlice } from 'slices/users/JoinSlice';
import { mainProductSlice } from 'slices/users/MainProductSlice';
import { newAdressSlice } from 'slices/users/NewMemberSlice.js';
import { RecentAdressSlice } from 'slices/users/RecentMemberSlice.js';
import { ShowOrderSlice } from 'slices/users/ShowOrderSlice.js';
import { reviewListSlice } from 'slices/users/ReviewListSlice';
import { reviewProdInfoSlice } from 'slices/users/ReviewProdInfoSlice';
import { ReviewWriteSlice } from 'slices/users/ReviewWriteSlice';
//관리자 페이지
import { adminAppSlice } from 'slices/admin/adminAppSlice';
import { adminLoginSlice } from 'slices/admin/LoginSlice';
import { adminUserSlice } from 'slices/admin/AdminUserSlice';
import { memberSlice } from 'slices/admin/MemberSlice';
import { manageProdSlice } from 'slices/admin/ManageProdSlice';
import { addProdSlice } from 'slices/admin/AddProdSlice';
import { manageOrderSlice } from 'slices/admin/ManageOrderSlice';
import { adminReviewListSlice } from 'slices/admin/AdminReviewListSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        //사용자 페이지
        appLogin: appSlice.reducer,
        userLogin: userLoginSlice.reducer,
        joinMember: joinMemberSlice.reducer,
        mainprod: mainProductSlice.reducer,
        showOrder: ShowOrderSlice.reducer,
        AdressMember: newAdressSlice.reducer,
        recentMember: RecentAdressSlice.reducer,
        reviewDataList: reviewListSlice.reducer,
        reviewProdInfo: reviewProdInfoSlice.reducer,
        ReviewWrite: ReviewWriteSlice.reducer,
        //관리자 페이지
        adminLogin: adminLoginSlice.reducer,
        adminAppLogin: adminAppSlice.reducer,
        adminuser: adminUserSlice.reducer,
        member: memberSlice.reducer,
        manageProd: manageProdSlice.reducer,
        addProd: addProdSlice.reducer,
        manageOrder: manageOrderSlice.reducer,
        adminReviewList: adminReviewListSlice.reducer,
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});

export default store;
