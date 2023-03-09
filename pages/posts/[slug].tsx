import { GetStaticPropsContext } from "next";
import Head from "next/head";
import PostContent from "../../components/Posts/PostDetail/PostContent";
import {
  getPostData,
  getPostsFiles,
  PostDataType,
} from "../../lib/posts-utils";

const PostDetailPage = ({ post }: { post: PostDataType }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostDetailPage;

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || !params.slug) {
    return;
  }
  const { slug } = params;

  const postData = getPostData(slug as string);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
