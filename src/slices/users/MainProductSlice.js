import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

/** 비동기 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.

export const getMainProdList = createAsyncThunk("/main/getMainProdList", async (payload, {rejectWithValue}) => {
    let result = null;
    try {
        result = await axios.get("http://121.160.207.51/products/main");
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const mainProductSlice = createSlice({
    name: 'mainprod',
    initialState: {
        rt: null,   //HTTP 상태 코드 (200, 404, 500등)
        rtmsg: null, //에러메시지
        item: [], //ajax 처리를 통해 수신된 데이터
        loading: false,
        prod: null,
    },
    reducers: {},
    extraReducers: {
        [getMainProdList.pending]: (state, {payload}) => {
            return {...state, loading: true};
        },

        [getMainProdList.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                prods: payload.data.item,
                loading: false
            }
        },
        [getMainProdList.rejected]: (state, {payload}) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            }
        }
    }
});

//리듀서 객체 내보내기
export default mainProductSlice.reducer;