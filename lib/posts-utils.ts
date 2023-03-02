import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //확장자 없는 파일 이름

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts: any[] = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
