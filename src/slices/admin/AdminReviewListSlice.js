/**
 * @filename    : AdminReviewListSlice.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰 관리 페이지에서 호출하는 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const getAdminReviewList = createAsyncThunk('/admin/getAdminReviewList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(ServerUrl + `/review/admin`);
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const adminReviewListSlice = createSlice({
    name: 'adminReviewList',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getAdminReviewList.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getAdminReviewList.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getAdminReviewList.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false,
            };
        },
    },
});

export default adminReviewListSlice.reducer;
