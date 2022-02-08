import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
