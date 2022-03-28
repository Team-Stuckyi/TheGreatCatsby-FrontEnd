/**
 * @filename    : MainProductSlice.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 전체 상품의 정보를 받아오는 slices
 */

import axios from 'axios';
import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMainProdList = createAsyncThunk('/main/getMainProdList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.get(ServerUrl + '/products/main');
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const mainProductSlice = createSlice({
    name: 'mainprod',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
        prod: null,
    },
    reducers: {},
    extraReducers: {
        [getMainProdList.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getMainProdList.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                prods: payload.data.item,
                loading: false,
            };
        },
        [getMainProdList.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                prods: payload.data.item,
                loading: false,
            };
        },
    },
});

export default mainProductSlice.reducer;
