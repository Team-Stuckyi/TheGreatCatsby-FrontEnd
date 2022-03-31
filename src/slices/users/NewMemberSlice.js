import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const putAdressMember = createAsyncThunk('/adress/putAdressMember', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        result = await axios.put(ServerUrl + `/members/newaddr/${payload.user_id}`, {
            name: payload.name,
            tel: payload.tel,
            addr1: payload.addr1,
            addr2: payload.addr2,
        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }
    return result;
});

export const newAdressSlice = createSlice({
    name: 'AdressMember',
    initialState: {
        putrt: null,
        putrtmsg: null,
        putitem: {},
        putloading: false,
    },
    reducers: {},
    extraReducers: {
        [putAdressMember.pending]: (state, { payload }) => {
            return { ...state, putloading: true };
        },

        [putAdressMember.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                putrt: payload.status,
                putrtmsg: payload.statusText,
                putitem: payload.data.item,
                putloading: false,
            };
        },
        [putAdressMember.rejected]: (state, { payload }) => {
            return {
                ...state,
                putrt: payload.status,
                putrtmsg: payload.statusText,
                putitem: payload.data,
                putloading: false,
            };
        },
    },
});

export default newAdressSlice.reducer;