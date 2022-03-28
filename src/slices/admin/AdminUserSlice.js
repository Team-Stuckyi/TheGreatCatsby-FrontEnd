import axios from 'axios';
import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAdminUserList = createAsyncThunk('/adminUser/getAdminUserList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.get(ServerUrl + '/admins/all');
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const editAdminUserList = createAsyncThunk('/adminUser/editAdminUserList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.put(ServerUrl + '/admins/edit/' + payload.user_id, { name: payload.name, email: payload.email });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const delAdminUserList = createAsyncThunk('/adminUser/delAdminUserList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.put(ServerUrl + '/admims/getout/' + payload);
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const adminUserSlice = createSlice({
    name: 'adminuser',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        adminUser: null,
        loading: false,
        del: null,
    },
    reducers: {},
    extraReducers: {
        [getAdminUserList.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getAdminUserList.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getAdminUserList.rejected]: (state, { payload }) => {
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

export default adminUserSlice.reducer;
