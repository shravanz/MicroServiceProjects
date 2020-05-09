import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

export default () => {
  return (
    <div className="container">
      <h1> Blog Post</h1>
      <hr />
      <h2>Create post</h2>
      <PostCreate />
      <hr />
      <hr />
      <h2>Post Lists</h2>
      <PostList />
    </div>
  );
};
