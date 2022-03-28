import axios from 'axios';
import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMemberList = createAsyncThunk('/adminUser/getMemberList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.get(ServerUrl + '/members/all');
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

export const editMemberList = createAsyncThunk('/member/editMemberList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.put(ServerUrl + '/members/edit/' + payload.user_id, {
            name: payload.name,
            email: payload.email,
            tel: payload.tel,
        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const delMemberList = createAsyncThunk('/member/delMemberList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.put(ServerUrl + '/members/getout/' + payload);
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const memberSlice = createSlice({
    name: 'member',
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
        [getMemberList.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getMemberList.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getMemberList.rejected]: (state, { payload }) => {
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

export default memberSlice.reducer;
