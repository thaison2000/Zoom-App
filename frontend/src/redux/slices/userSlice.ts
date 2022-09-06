import { createSlice } from '@reduxjs/toolkit'
import { userRegister, userLogin, userProfile } from '../actions/userAction'

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [userRegister.pending.toString()]: (state) => {
      state.loading = true
      state.error = null
    },
    [userRegister.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false
      state.success = true 
    },
    [userRegister.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // login user
    [userLogin.pending.toString()]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.userToken = payload
    },
    [userLogin.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // user profile
    [userProfile.pending.toString()]: (state) => {
      state.loading = true
      state.error = null
    },
    [userProfile.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.userInfo = payload
    },
    [userProfile.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default userSlice.reducer