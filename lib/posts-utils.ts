import fs from "fs";
import path from "path";

import matter from "gray-matter";

export type PostDataType = {
  slug: string;
  content: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
};

type PostType = Omit<PostDataType, "slug" | "content">;

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //확장자 없는 파일 이름

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: PostDataType = {
    slug: postSlug,
    ...(data as PostType),
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));

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
