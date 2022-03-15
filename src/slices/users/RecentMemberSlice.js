import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const getAdressMember = createAsyncThunk('/adress/getAdressMember', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        console.log();
        result = await axios.get(ServerUrl + `/members/address/${payload}`, {

        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    console.log(result);
    return result;
});


export const RecentAdressSlice = createSlice({
    name: 'recentMember',
    initialState: {
        rt2: null,
        rtmsg2: null,
        item2: {},
        loading2: false,
    },
    reducers: {},
    extraReducers: {
        [getAdressMember.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getAdressMember.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt2: payload.status,
                rtmsg2: payload.statusText,
                item2: payload.data.item,
                loading2: false,
            };
        },
        [getAdressMember.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt2: payload.status,
                rtmsg2: payload.statusText,
                item2: payload.data,
                loading2: false,
            };
        },
    },
});

export default RecentAdressSlice.reducer;