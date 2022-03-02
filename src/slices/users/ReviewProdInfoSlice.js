/**
 * @filename    : ReviewProdInfoSlice.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 해당 리뷰 페이지의 상품의 데이터를 호출하는 slices
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const getReviewProdInfo = createAsyncThunk('/review/getReviewProdInfo', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        console.log();
        result = await axios.get(ServerUrl + `/products/${payload}`);
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const reviewProdInfoSlice = createSlice({
    name: 'reviewDataList',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getReviewProdInfo.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getReviewProdInfo.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getReviewProdInfo.rejected]: (state, { payload }) => {
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

export default reviewProdInfoSlice.reducer;
