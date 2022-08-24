export interface PostFrontMatterType {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
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
