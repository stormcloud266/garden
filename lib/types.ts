import { ComponentPropsWithoutRef, ElementType } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";

export interface PostFrontMatterType {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export interface PostType extends PostFrontMatterType {
  content: string;
}

export type PostsFrontMatterType = PostFrontMatterType[];

export interface PostsType {
  posts: PostType[];
}

export type MarkdownComponentType<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & ReactMarkdownProps;
