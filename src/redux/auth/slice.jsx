import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;

        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;

        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});
export const authReducer = authSlice.reducer;
