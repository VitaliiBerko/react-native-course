import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUpUser = createAsyncThunk(
  "auth/SignUp",
  async (credentials, thunkApi) => {
    const { email, password, login, avatar } = credentials;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });

      const user = auth.currentUser;

      return {
        avatar: user.photoURL,
        login: user.displayName,
        email: user.email,
        userId: user.uid,
      };
    } catch (error) {
        const rejectMessage = error.message
        return thunkApi.rejectWithValue(rejectMessage)

    }
  }
);
