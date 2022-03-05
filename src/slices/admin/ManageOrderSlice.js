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
            result = await axios.get(ServerUrl + '/orders/all');
    }   catch (err) {
            result = rejectWithValue(err.response);
    }
    return result;
});
 
 
export const manageOrderSlice = createSlice({
    name: 'manageOrder',
 
    initialState: {
        rt: null,
        orders: [],
    },
 
    reducers: {changeOrders: (state, action) => {
        state.orders = action.payload
    }},
 
    extraReducers: {
        [getOrders.pending]: (state, {payload}) => {
            return {...state, loading: true}
        },
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
                        order_price: i.order_price
                    }
                }),
            }
        },
        [getOrders.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
            }
        }
    },    
});
 
export default manageOrderSlice.reducer;