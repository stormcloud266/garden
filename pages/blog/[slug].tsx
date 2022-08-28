import { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { PostType } from "@lib/types";
import { getAllSlugs, getPostDataBySlug } from "@lib/utils";
import components from "@lib/markdown-components";

import Title from "@components/title";
import Section from "@components/section";
import HomeLink from "@components/home-link";
import Tag from "@components/tag";

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

      <div className="animate-fade relative">
        <HomeLink />
        <Title>{frontMatter.title}</Title>
        <Tag>{frontMatter.category}</Tag>

        <div className="blog mt-14">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
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
