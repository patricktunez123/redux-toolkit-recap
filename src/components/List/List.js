import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Features/posts/postsSlice";
import axios from "../../common/apiCall";

const List = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios
        .get("/posts")
        .catch((error) => console.log("There was an error:", error));
      dispatch(getPosts(posts.data));
    };
    fetchPosts();
  }, [dispatch]);

  console.log("=====>>>", posts);
  return (
    <div>
      {posts.map((post) => (
        <>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
};

export default List;
