import Link from "next/link";

const HomeLink = () => {
  return (
    <Link href="/">
      <a className="group mb-12 inline-block absolute no-underline top-12">
        <span className="group-hover:-translate-x-0.5 inline-block transition-transform">
          &larr;
        </span>
        <span className="underline decoration-burnt ml-1">
          let&apos;s go home
        </span>
      </a>
    </Link>
  );
};

export default HomeLink;
