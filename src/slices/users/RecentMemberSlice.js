import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const getAdressMember = createAsyncThunk('/adress/getAdressMember', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.get(ServerUrl + `/members/address/${payload}`, {

        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});


export const RecentAdressSlice = createSlice({
    name: 'recentMember',
    initialState: {
        recentRt: null,
        recentRtmsg: null,
        recentItem: [],
        recentLoading: false,
    },
    reducers: {},
    extraReducers: {
        [getAdressMember.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getAdressMember.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                recentRt: payload.status,
                recentRtmsg: payload.statusText,
                recentItem: payload.data.item,
                recentLoading: false,
            };
        },
        [getAdressMember.rejected]: (state, { payload }) => {
            return {
                ...state,
                recentRt: payload.status,
                recentRtmsg: payload.statusText,
                recentItem: payload.data,
                recentLoading: false,
            };
        },
    },
});

export default RecentAdressSlice.reducer;