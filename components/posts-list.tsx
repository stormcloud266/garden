import Link from "next/link";
import { PostsFrontMatterType } from "@lib/types";

interface PostsListProps {
  posts: PostsFrontMatterType;
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="mt-7 flex flex-col items-start">
      {posts.map(({ slug, title }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <a className="mt-2 inline-block text-lg">{title}</a>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
