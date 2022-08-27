import Image from "next/image";
import Link from "next/link";
import { MarkdownComponentType } from "./types";

const components = {
  img: ({ node, ...props }: MarkdownComponentType<"img">) => (
    <Image
      alt={props.alt || ""}
      src={props.src || ""}
      layout="responsive"
      width={672}
      height={354}
      objectFit="cover"
    />
  ),
  a: ({ node, ...props }: MarkdownComponentType<"a">) => {
    const externalLink = props.href?.startsWith("http");
    return externalLink ? (
      <a href={props.href || "/"} target="_blank" rel="noopener noreferrer">
        {props.children[0]}
      </a>
    ) : (
      <Link href={props.href || "/"}>{props.children[0]}</Link>
    );
  },
};

export default components;
