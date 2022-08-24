import type { NextPage } from "next";
import Title from "@components/title";
import Section from "@components/section";
import Wrapper from "@components/wrapper";
import { getAllPostsFrontmatter } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";
import Link from "next/link";

const Home: NextPage<PostsFrontMatterType> = ({ posts }) => {
  return (
    <Section>
      <Wrapper small>
        <Title tag="h1">Welcome to the Garden</Title>
        <div>
          {posts.map(({ slug, frontMatter }) => (
            <Link key={slug} href={`/blog/${slug}`}>
              {frontMatter.title}
            </Link>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPostsFrontmatter();

  return {
    props: { posts },
  };
}
