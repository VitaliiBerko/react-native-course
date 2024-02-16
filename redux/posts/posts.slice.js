import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status";
import {
  createComment,
  createPosts,
  getComments,
  getPosts,
  getUserPosts,
} from "./posts.operations";

const initialState = {
  posts: [],
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
      const index = state.posts.findIndex(({ id }) => id === payload);
      state.posts[index].commentsCount += 1;

      const userIndex = state.userPosts.findIndex(({ id }) => id === payload);
      if (userIndex >= 0) {
        state.userPosts[userIndex].commentsCount += 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createPosts.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(createPosts.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.posts.push(payload);
        state.userPosts.push(payload);
        state.error = null;
      })
      .addCase(createPosts.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.posts = payload;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getUserPosts.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getUserPosts.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.userPosts = payload;
        state.error = null;
      })
      .addCase(getUserPosts.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(createComment.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(createComment.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.comments.push(payload);
        state.error = null;
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getComments.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.comments = payload;
        state.error = null;
      })
      .addCase(getComments.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      });
  },
});

export const postReducer = postsSlice.reducer;
export const { incrementComentsCount } = postsSlice.actions;
