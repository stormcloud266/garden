import Link from "next/link";
import { PostsFrontMatterType } from "@lib/types";

const PostsList = ({ posts }: PostsFrontMatterType) => {
  return (
    <div className="mt-7 flex flex-col items-start">
      {posts.map(({ slug, frontMatter }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <a className="mt-2 inline-block text-lg">{frontMatter.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
