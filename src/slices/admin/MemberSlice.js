import { ServerUrl } from 'key';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.

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
        rt: null, //HTTP 상태 코드 (200, 404, 500등)
        rtmsg: null, //에러메시지
        item: [], //ajax 처리를 통해 수신된 데이터
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

//리듀서 객체 내보내기
export default memberSlice.reducer;
