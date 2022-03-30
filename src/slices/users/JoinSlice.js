/**
 * @filename    : JoinSlice.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 회원가입 기능을 위한 슬라이스
 */

 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import axios from 'axios';
 import {ServerUrl} from 'key';
 
 export const postMember = createAsyncThunk('POST_MEMBER', async (payload, { rejectWithValue }) => {
     let result = null;
 
     try {
         result = await axios.post(ServerUrl + `/members/join`, payload);
     } catch (e) {
         result = rejectWithValue(e.response);
     }
 
     return result;
 });

 export const joinMemberSlice = createSlice({
    name: 'joinMember',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [postMember.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [postMember.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false
            };
        },
        [postMember.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            };
        },
    },
});

export default joinMemberSlice.reducer;