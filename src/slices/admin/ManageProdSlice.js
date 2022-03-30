/**
 * @filename    : ManageProdSlice.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지에서 사용되는 슬라이스
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {ServerUrl} from 'key';
 
 
export const getProducts = createAsyncThunk("GET_PRODUCTS", async (payload, { rejectWithValue })  => {
    let result = null;
 
    try {
        let apiUrl = ServerUrl + '/products/all' + '?page=' + payload.page;

        if (payload.searchKey) {
            apiUrl += '&' + payload.searchKey + '=' + payload.searchValue;
        }

        result = await axios.get(apiUrl);

    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

export const putProducts = createAsyncThunk("PUT_PRODUCTS", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.put(ServerUrl + '/products/' + payload.prod_id, {name: payload.name, stock: payload.stock, status: payload.status ? 'Y' : 'N' });
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});
 
 
export const manageProdSlice = createSlice({
    name: 'manageProd',
 
    initialState: {
        rt: null,
        rtmsg: null,
        products: [],
        actionType: "",
        totalCount: 10,
        loading: false
    },
 
    reducers: {changeProducts: (state, action) => {
        state.products = action.payload
    }},
 
    extraReducers: {
        [getProducts.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [getProducts.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                loading: false,
                products: payload.data.item.map(i => {
                    return {
                            prod_id: i.prod_id,
                            name: i.name,
                            stock: i.stock,
                            status: i.status === 'Y'
                        }
                }),
                actionType: "GET_PRODUCTS",
                totalCount: payload.data.totalCount
            }
        },
        [getProducts.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                loading: false,
                actionType: "GET_PRODUCTS"
            }
        },
        [putProducts.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [putProducts.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                loading: false,
                actionType: "PUT_PRODUCTS"
            }
        },
        [putProducts.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                loading: false,
                actionType: "PUT_PRODUCTS"
            }
        },
    },    
});
 
export default manageProdSlice.reducer;