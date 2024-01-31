import { STATUS } from "../../constants/status";
import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signOutUser, signUpUser } from "./auth.operations";
import persistReducer from "redux-persist/es/persistReducer";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
// import { storage } from "../../firebase/config";
const initialState = {
  user: {
    avatar: "",
    login: null,
    email: null,
    userId: null,
  },
  status: STATUS.idle,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = STATUS.success;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(signInUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.user = payload;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.status = STATUS.success;
        state = initialState;
      })
      .addCase(signOutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state = initialState;
      });
  },
});

const persistConfig ={
  key: 'auth',
  storage: AsyncStorage
}

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

// export const authReducer = authSlice.reducer