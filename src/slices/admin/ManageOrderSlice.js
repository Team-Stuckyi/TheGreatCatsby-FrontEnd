/**
 * @filename    : ManageOrderSlice.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 주문 관리 페이지에서 사용되는 슬라이스
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {ServerUrl} from 'key';
 
 
export const getOrders = createAsyncThunk("GET_ORDERS", async (payload, { rejectWithValue })  => {
        let result = null;

        try {
            let apiUrl = ServerUrl + '/orders/all' + '?page=' + payload.page;

            if (payload.searchKey) {
                apiUrl += '&' + payload.searchKey + '=' + payload.searchValue;
            }

            result = await axios.get(apiUrl);

    }   catch (err) {
            result = rejectWithValue(err.response);
    }
    return result;
});

export const putOrders = createAsyncThunk("PUT_ORDERS", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.put(ServerUrl + '/orders/' + payload.order_id, {order_date: payload.order_date, order_price: payload.order_price, order_status: payload.order_status ? 'Y' : 'N' });
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});
 
 
export const manageOrderSlice = createSlice({
    name: 'manageOrder',
 
    initialState: {
        rt: null,
        orders: [],
        actionType: "",
        totalCount: 10
    },
 
    reducers: {changeOrders: (state, action) => {
        state.orders = action.payload
    }},
 
    extraReducers: {
        [getOrders.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                rt: payload.status,
                orders: payload.data.item.map(i => {
                    return {
                        order_id: i.order_id,
                        name: i.name,
                        order_date: i.order_date,
                        email: i.email,
                        order_price: i.order_price,
                        order_status: i.order_status === 'Y',
                    }
                }),
                actionType: "GET_ORDERS",
                totalCount: payload.data.totalCount
            }
        },
        [getOrders.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                actionType: "GET_ORDERS"
            }
        },
        [putOrders.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                rt: payload.status,
                actionType: "PUT_ORDERS"
            }
        },
        [putOrders.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                actionType: "PUT_ORDERS"
            }
        },
    },
});
 
export default manageOrderSlice.reducer;