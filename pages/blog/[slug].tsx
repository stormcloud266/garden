import { PostType } from "@lib/types";
import { getAllSlugs, getPostDataBySlug } from "@lib/utils";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Title from "@components/title";
import Section from "@components/section";
import Wrapper from "@components/wrapper";
import Link from "next/link";

interface PageParams {
  params: {
    slug: string;
  };
}

const Post: NextPage<PostType> = ({ frontMatter, content }) => {
  return (
    <Section tag="main">
      <Wrapper small>
        <Title tag="h1">{frontMatter.title}</Title>
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <Image
                alt={props.alt || ""}
                src={props.src || ""}
                layout="responsive"
                width={728}
                height={410}
                objectFit="cover"
              />
            ),
            a: ({ node, ...props }) => {
              const externalLink = props.href?.startsWith("http");
              return externalLink ? (
                <a
                  href={props.href || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.children[0]}
                </a>
              ) : (
                <Link href={props.href || "/"}>{props.children[0]}</Link>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </Wrapper>
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
