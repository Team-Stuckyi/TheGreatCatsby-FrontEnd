import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const putAdressMember = createAsyncThunk('/adress/putAdressMember', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        console.log();
        result = await axios.put(ServerUrl + `/members/newaddr/${payload}`, {
            params: {
                name: payload.name,
                tel: payload.tel,
                addr1: payload.addr1,
                addr2: payload.addr2,
            }
        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    console.log(result);
    return result;
});

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

export const newAdressSlice = createSlice({
    name: 'AdressMember',
    initialState: {
        rt: null,
        rtmsg: null,
        item: {},
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getAdressMember.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },

        [getAdressMember.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data.item,
                loading: false,
            };
        },
        [getAdressMember.rejected]: (state, { payload }) => {
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

export default newAdressSlice.reducer;