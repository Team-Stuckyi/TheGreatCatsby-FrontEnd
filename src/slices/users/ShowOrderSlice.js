import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerUrl } from 'key';

export const postOrder = createAsyncThunk('/order/postOrder', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(ServerUrl + `/orders/post`, payload);
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});


export const ShowOrderSlice = createSlice({
    name: 'showOrder',
    initialState: {
        rt3: null,
        rtmsg3: null,
        item3: {},
        loading3: false,
    },
    reducers: {},
    extraReducers: {
        [postOrder.pending]: (state, { payload }) => {
            return { ...state, loading3: true };
        },

        [postOrder.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt3: payload.status,
                rtmsg3: payload.statusText,
                item3: payload.data.item,
                loading3: false,
            };
        },
        [postOrder.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt3: payload.status,
                rtmsg3: payload.statusText,
                item3: payload.data,
                loading3: false,
            };
        },

    },
});

export default ShowOrderSlice.reducer;