import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts, PostDataType } from "../../lib/posts-utils";

const AllPostsPage = ({ posts }: { posts: PostDataType[] }) => {
  return <AllPosts posts={posts} />;
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
