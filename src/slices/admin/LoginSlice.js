import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('POST_LOGIN', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(ServerUrl + '/admins/login', payload);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const adminLoginSlice = createSlice({
    name: 'login',
    initialState: {
        rt: null, //HTTP 상태 코드 (200, 404, 500등)
        rtmsg: null, //에러메시지
        data: null,
        loading: false,
    },

    reducers: {},

    extraReducers: {
        [login.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [login.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                data: payload.data,
                loading: false,
            };
        },
        [login.rejected]: (state, { payload }) => {
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
