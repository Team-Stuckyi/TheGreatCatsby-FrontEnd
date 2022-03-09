import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.

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
        rt: null, //HTTP 상태 코드 (200, 404, 500등)
        rtmsg: null, //에러메시지
        item: [], //ajax 처리를 통해 수신된 데이터
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

//리듀서 객체 내보내기
export default adminUserSlice.reducer;
