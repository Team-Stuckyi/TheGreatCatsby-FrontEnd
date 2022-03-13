/**
 * @filename    : ReviewListSlice.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 해당 리뷰 페이지의 상품 번호와 일치하는 리뷰를 호출하는 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const getReviewWrite = createAsyncThunk('/review/getReviewWrite', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(ServerUrl + `/reviews/write`, payload);
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const ReviewWriteSlice = createSlice({
    name: 'ReviewWrite',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getReviewWrite.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getReviewWrite.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getReviewWrite.rejected]: (state, { payload }) => {
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

export default ReviewWriteSlice.reducer;
