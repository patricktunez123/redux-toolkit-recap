import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export default postsSlice.reducer;
export const { getPosts } = postsSlice.actions;
