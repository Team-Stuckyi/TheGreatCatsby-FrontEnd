/**
 * @filename    : AddProdSlice.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지에서 사용되는 상품 추가 슬라이스
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {ServerUrl} from 'key';

export const postProduct = createAsyncThunk('POST_PRODUCT', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(ServerUrl + `/products`, payload);
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const addProdSlice = createSlice({
    name: 'addProd',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [postProduct.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [postProduct.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [postProduct.rejected]: (state, { payload }) => {
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

export default addProdSlice.reducer;