import { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { PostType } from "@lib/types";
import { getAllSlugs, getPostDataBySlug } from "@lib/utils";

import Title from "@components/title";
import Section from "@components/section";
import HomeLink from "@components/home-link";
import components from "@lib/markdown-components";

interface PageParams {
  params: {
    slug: string;
  };
}

const Post: NextPage<PostType> = ({ frontMatter, content }) => {
  return (
    <Section tag="main">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <HomeLink />
      <Title>{frontMatter.title}</Title>
      <div className="blog">
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </div>
    </Section>
  );
};

export default Post;

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PageParams) {
  const { slug } = params;
  const post = getPostDataBySlug(slug);

  return {
    props: post,
  };
}
