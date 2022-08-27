import { ComponentPropsWithoutRef, ElementType } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";

export interface PostFrontMatterType {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    category: string;
  };
}

export interface PostType extends PostFrontMatterType {
  content: string;
}

export interface PostsFrontMatterType {
  posts: PostFrontMatterType[];
}

export interface PostsType {
  posts: PostType[];
}

export type MarkdownComponentType<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & ReactMarkdownProps;
