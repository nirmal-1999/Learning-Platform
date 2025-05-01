import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: null,
    username: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const {name, username} = action.payload;
            state.name = name;
            state.username = username
        },
        useLogOut(state) {
            state.name = null;
            state.username = null;
        }
    }
});

export const {setUser, useLogOut} = userSlice.actions;
export default userSlice.reducer;