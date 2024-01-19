import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status";

const initialState = {
  post: [],
  userPosts: [],
  comments: [],
  status: STATUS.idle,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementComentsCount: (state, { payload }) => {
      const index = state.post.findIndex(({ id }) => id === payload);
      state.post[index].commentsCount += 1;

      const userIndex = state.userPosts.findIndex(({ id }) => id === payload);
      if (userIndex >= 0) {
        state.userPosts[userIndex].commentsCount += 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const postReducer = postsSlice.reducer;
export const { incrementComentsCount } = postsSlice.actions;
