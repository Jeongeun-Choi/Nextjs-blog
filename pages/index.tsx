import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";

const MOCK_POSTS = [
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS는 리액트 프레임워크입니다. ",
    date: "2023-03-01",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-NextJS2",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS는 리액트 프레임워크입니다. ",
    date: "2023-03-01",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-NextJS3",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS는 리액트 프레임워크입니다. ",
    date: "2023-03-01",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-NextJS4",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS는 리액트 프레임워크입니다. ",
    date: "2023-03-01",
  },
];
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={MOCK_POSTS} />
    </>
  );
};

export default HomePage;
