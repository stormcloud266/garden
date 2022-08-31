import type { NextPage } from "next";
import Head from "next/head";

import { getAllPostsFrontMatter, sortByDate } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";

import Title from "@components/title";
import Section from "@components/section";
import PostsList from "@components/posts-list";

interface PostsListProps {
  posts: PostsFrontMatterType;
}

const Home: NextPage<PostsListProps> = ({ posts }) => {
  return (
    <Section>
      <Head>
        <title>The Garden 🪴</title>
      </Head>
      <div className="animate-fade">
        <Title>The Garden 🪴</Title>
        <div>
          <p className="mt-6">
            This is a template for a{" "}
            <a
              href="https://maggieappleton.com/garden-history"
              target="_blank"
              rel="noopener noreferrer"
            >
              digital garden
            </a>{" "}
            or personal blog built with NextJS and Tailwind. Write about your
            interests, thoughts, and musings in markdown.
          </p>
        </div>
        <PostsList posts={posts} />
      </div>
    </Section>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPostsFrontMatter();

  return {
    props: { posts: sortByDate(posts) },
  };
}
