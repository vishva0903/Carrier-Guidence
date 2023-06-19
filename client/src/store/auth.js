import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id: '',
    isLoggedIn: false,
    role: '',
}

export const LoginedUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedUser: (state, action) => {
            state.id = action.payload
        },
        isLoggedIn: (state) => {
            state.isLoggedIn = true
        },
        isNotLoggedIn: (state) => {
            state.isLoggedIn = false
        },
        loginRole: (state, action) => {
            state.role = action.payload
        },
        logout: (state) => {
            state.user = ''
            state.role = ''
            state.isConnected = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { loggedUser, isLoggedIn, isNotLoggedIn, loginRole, logout } = LoginedUserSlice.actions

export default LoginedUserSlice.reducer