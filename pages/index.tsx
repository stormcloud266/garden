import type { NextPage } from "next";
import Title from "@components/title";
import Section from "@components/section";
import Wrapper from "@components/wrapper";
import { getAllPostsFrontmatter } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";
import Link from "next/link";

const Home: NextPage<PostsFrontMatterType> = ({ posts }) => {
  const categories = [
    ...new Set(posts.map(({ frontMatter }) => frontMatter.category)),
  ];

  return (
    <Section>
      <Wrapper small>
        <Title tag="h1">The Garden 🪴</Title>
        <div>
          <p className="mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            corrupti rerum ex numquam nemo similique eius molestiae deleniti,
            sint veniam laudantium? Rem, magnam aspernatur!
          </p>
        </div>
        <div className="mt-7 flex flex-col items-start">
          {posts.map(({ slug, frontMatter }) => (
            <Link key={slug} href={`/blog/${slug}`}>
              <a className="mt-2 inline-block text-lg">{frontMatter.title}</a>
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
