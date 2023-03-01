import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "Getting Started with NextJS",
  slug: "getting-started-with-NextJS4",
  image: "getting-started-nextjs.png",
  date: "2023-03-01",
  content: "# 첫번째 게시글입니다.",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
