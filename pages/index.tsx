import type { NextPage } from "next";

import { getAllPostsFrontMatter } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";

import Title from "@components/title";
import Section from "@components/section";
import PostsList from "@components/posts-list";

const Home: NextPage<PostsFrontMatterType> = ({ posts }) => {
  return (
    <Section>
      <Title tag="h1">The Garden 🪴</Title>
      <div>
        <p className="mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          corrupti rerum ex numquam nemo similique eius molestiae deleniti, sint
          veniam laudantium? Rem, magnam aspernatur!
        </p>
      </div>
      <PostsList posts={posts} />
    </Section>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPostsFrontMatter();

  return {
    props: { posts },
  };
}
