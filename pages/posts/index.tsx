import Head from "next/head";
import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts, PostDataType } from "../../lib/posts-utils";

const AllPostsPage = ({ posts }: { posts: PostDataType[] }) => {
  return (
    <>
      <Head>
        <title>전체 게시글</title>
        <meta name="description" content="프로그래밍 관련 게시글들" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
