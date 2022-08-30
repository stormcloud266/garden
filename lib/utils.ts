import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostFrontMatterType, PostsFrontMatterType } from "./types";

export const slugFromFilename = (filename: string): string => {
  return filename.replace(".md", "");
};

export const getPostFrontMatter = (filename: string) => {
  const meta = fs.readFileSync(path.join("posts", filename));
  const { data } = matter(meta);

  return {
    slug: slugFromFilename(filename),
    ...data,
  } as PostFrontMatterType;
};

export const getAllFiles = () => {
  return fs.readdirSync(path.join("posts"));
};

export const getAllSlugs = () => {
  const files = getAllFiles();
  return files.map((filename) => slugFromFilename(filename));
};

export const getAllPostsFrontMatter = () => {
  const files = getAllFiles();
  return files.map((filename) => getPostFrontMatter(filename));
};

export const getPostDataBySlug = (slug: string) => {
  const filename = slug + ".md";
  const meta = fs.readFileSync(path.join("posts", filename));
  const { data, content } = matter(meta);

  return {
    slug,
    content,
    ...data,
  };
};

export const getUniqueCategories = (posts: PostsFrontMatterType) => {
  return [...new Set(posts.map(({ category }) => category))];
};

export const sortByDate = (posts: PostsFrontMatterType) => {
  return posts.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date);
  });
};
