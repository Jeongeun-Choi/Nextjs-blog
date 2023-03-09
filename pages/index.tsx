import Head from "next/head";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts, PostDataType } from "../lib/posts-utils";

const HomePage = ({ posts }: { posts: PostDataType[] }) => {
  return (
    <>
      <Head>
        <title>정은 블로그</title>
        <meta name="description" content="nextjs로 연습중입니다." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
