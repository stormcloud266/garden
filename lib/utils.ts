import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export const getAllPostsFrontmatter = () => {
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
