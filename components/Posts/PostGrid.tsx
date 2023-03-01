import React from "react";

import classes from "./post-grid.module.css";
import PostItem from "./PostItem";

const PostGrid = ({ posts = [] }) => {
  return (
    <ul className={classes.grid}>
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
