import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const adminlogin = createAsyncThunk('POST_ADMINLOGIN', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.post(ServerUrl + '/admins/login', payload);
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

export const adminLoginSlice = createSlice({
    name: 'adminLogin',
    initialState: {
        rt: null, //HTTP 상태 코드 (200, 404, 500등)
        rtmsg: null, //에러메시지
        data: null,
        loading: false,
    },

    reducers: {},

    extraReducers: {
        [adminlogin.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [adminlogin.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                data: payload.data,
                loading: false,
            };
        },
        [adminlogin.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload?.status ? payload.status : '500',
                rtmsg: payload?.statusText ? payload.statusText : 'Server Error',
                loading: false,
            };
        },
    },
});

export default adminLoginSlice.reducer;
