import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../common/apiCall";

const initialState = {
  loading: false,
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await axios
    .get("/posts")
    .catch((error) => console.log("Error", error));
  return posts.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    },
    [fetchPosts.rejected]: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export default postsSlice.reducer;
export const { getPosts } = postsSlice.actions;
