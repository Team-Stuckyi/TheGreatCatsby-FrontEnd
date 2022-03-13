import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'appLogin',
    initialState: {
        loginSuccess: false,
        email: null,
        name: null,
        tel: null,
        user_id: null
    },

    reducers: {changeLoginState: (state, action) => {
        state.loginSuccess = action.payload.loginSuccess;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.tel = action.payload.tel;
        state.user_id = action.payload.user_id;
    }}
});

export default appSlice.reducer;