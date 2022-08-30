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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            corrupti rerum ex numquam nemo similique eius molestiae deleniti,
            sint veniam laudantium? Rem, magnam aspernatur!
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
