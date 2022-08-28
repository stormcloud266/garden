import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostFrontMatterType } from "./types";

export const slugFromFilename = (filename: string) => {
  return filename.replace(".md", "");
};

export const getPostFrontMatter = (filename: string) => {
  const meta = fs.readFileSync(path.join("posts", filename));
  const { data } = matter(meta);
  return data;
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

  const posts = files.map((filename) => ({
    slug: slugFromFilename(filename),
    frontMatter: getPostFrontMatter(filename),
  }));

  return posts;
};

export const getPostDataBySlug = (slug: string) => {
  const filename = slug + ".md";
  const meta = fs.readFileSync(path.join("posts", filename));
  const { data, content } = matter(meta);

  return {
    slug,
    frontMatter: data,
    content,
  };
};

export const getUniqueCategories = (posts: PostFrontMatterType[]) => {
  return [...new Set(posts.map(({ frontMatter }) => frontMatter.category))];
};

export const sortByDate = (posts: PostFrontMatterType[]) => {
  return posts.sort((a, b) => {
    return +new Date(b.frontMatter.date) - +new Date(a.frontMatter.date);
  });
};
