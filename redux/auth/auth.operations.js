import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
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
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkApi) => {
    const { email, password } = credentials;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      return {
        avatar: user.photoURL,
        login: user.displayName,
        email: user.email,
        userId: user.uid,
      };
    } catch (error) {
      const rejectMessage = error.message;
      return thunkApi.rejectWithValue(rejectMessage)
    }
  }
);

export const signOutUser = createAsyncThunk(
  'auth/signOutUser',
  async (_, thunkApi)=>{
    try {
      await auth.signOut()
    } catch (error) {
      const rejectMessage= error.message;
      return thunkApi.rejectWithValue(rejectMessage)
      
    }
  }
)

export const getCurrentlySignedIn = createAsyncThunk(
  'auth/currentlySignedIn',
  async (_, thunkApi)=> {
    try {
      onAuthStateChanged(auth, async(user)=>{
        if(!user) {
          await thunkApi.dispatch(signOutUser()).unwrap()
        }
      })
    } catch (error) {
      const rejectMessage= error.message;
      return thunkApi.rejectWithValue(rejectMessage)
    }
  }
)
